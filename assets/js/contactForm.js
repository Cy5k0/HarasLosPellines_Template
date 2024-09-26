// Este script debe ir después de cargar el SDK de AWS desde el CDN

// Configuración de AWS
const REGION = "us-east-1"; // por ejemplo, "us-east-1"
const IDENTITY_POOL_ID = "us-east-1:8ae05fe4-9770-4afa-809b-cc4551935e09";
const SNS_TOPIC_ARN = "arn:aws:sns:us-east-1:730335627358:ContactForm";

// Configurar AWS SDK
AWS.config.region = REGION;
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: IDENTITY_POOL_ID,
});

// Crear el cliente SNS
const sns = new AWS.SNS();

// Función para enviar el mensaje a SNS
function sendMessageToSNS(name, email, subject, message) {
  const params = {
    Message: `Nuevo mensaje de contacto:\nNombre: ${name}\nEmail: ${email}\nAsunto: ${subject}\nMensaje: ${message}`,
    TopicArn: SNS_TOPIC_ARN,
  };

  return new Promise((resolve, reject) => {
    sns.publish(params, function (err, data) {
      if (err) {
        console.error("Error al enviar el mensaje:", err);
        reject(err);
      } else {
        console.log("Mensaje enviado con éxito:", data.MessageId);
        resolve(data);
      }
    });
  });
}

// Función para validar el formulario
function validateForm(name, email, subject, message) {
  if (!name || !email || !subject || !message) {
    showErrorMessage("Por favor, rellena todos los campos.");
    return false;
  }
  if (!/\S+@\S+\.\S+/.test(email)) {
    showErrorMessage("Por favor, introduce un email válido.");
    return false;
  }
  return true;
}

// Funciones para mostrar y ocultar mensajes
function showLoading() {
  document.querySelector(".loading").style.display = "block";
  document.querySelector(".error-message").style.display = "none";
  document.querySelector(".sent-message").style.display = "none";
}

function hideLoading() {
  document.querySelector(".loading").style.display = "none";
}

function showErrorMessage(message) {
  const errorElement = document.querySelector(".error-message");
  errorElement.textContent = message;
  errorElement.style.display = "block";
  document.querySelector(".sent-message").style.display = "none";
}

function showSentMessage() {
  document.querySelector(".sent-message").style.display = "block";
  document.querySelector(".error-message").style.display = "none";
}

// Implementar rate limiting
const RATE_LIMIT = 5; // Número máximo de envíos permitidos
const TIME_WINDOW = 3600000; // Ventana de tiempo en milisegundos (1 hora)

function checkRateLimit() {
  const now = Date.now();
  let rateData = JSON.parse(localStorage.getItem("rateLimitData")) || {
    count: 0,
    timestamp: now,
  };

  if (now - rateData.timestamp > TIME_WINDOW) {
    rateData = { count: 0, timestamp: now };
  }

  if (rateData.count >= RATE_LIMIT) {
    showErrorMessage(
      "Has excedido el límite de envíos. Por favor, inténtalo más tarde."
    );
    return false;
  }

  rateData.count++;
  localStorage.setItem("rateLimitData", JSON.stringify(rateData));
  return true;
}

// Manejar el envío del formulario
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".php-email-form");
  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    if (!checkRateLimit()) {
      return;
    }

    const name = this.querySelector('input[name="name"]').value.trim();
    const email = this.querySelector('input[name="email"]').value.trim();
    const subject = this.querySelector('input[name="subject"]').value.trim();
    const message = this.querySelector('textarea[name="message"]').value.trim();

    if (!validateForm(name, email, subject, message)) {
      return;
    }

    showLoading();

    try {
      await sendMessageToSNS(name, email, subject, message);
      hideLoading();
      showSentMessage();
      this.reset();
    } catch (error) {
      hideLoading();
      showErrorMessage(
        "Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde."
      );
    }
  });
});
