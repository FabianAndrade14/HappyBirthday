import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import confetti from 'canvas-confetti';

interface Quality {
  text: string;
  top: number;
  left: number;
}

@Component({
  selector: 'app-birthday',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './birthday.component.html',
  styleUrls: ['./birthday.component.scss']
})
export class BirthdayComponent implements OnInit, OnDestroy {

  showPhoto = false;
  showLetter = false;

  qualities: Quality[] = [];

  visibleParagraphs: string[] = [];

  private birthdayMusic = new Audio(
    'assets/sounds/cumpleaños.mp3'
  );

  private qualitiesList = [
    'Amorosa 💖',
    'Protectora 🤗',
    'Generosa 🌸',
    'Ejemplar ✨',
    'Valiente 🌟',
    'Incondicional ❤️',
    'Noble 💕',
    'Inspiradora 🌷',
    'Maravillosa 🎂',
    'Inteligente 🦋',
    'Alegre 🎉',
    'Extraordinaria 👑',
    'Dedicada 🌹',
    'Cariñosa 🐾',
    'Fuerte 💪',
    'Comprometida 🌼',
    'Admirable 🌟',
    'Ejemplo a seguir 🌈',
    'Amiga fiel 🐶',
    'Madre ejemplar 👩‍👧',
    'Hija amorosa 👩‍👧',
    'Hermana maravillosa 👭',
    'Prima querida 💕',
    'Familia unida 👨‍👩‍👧‍👦',
    'Corazón de oro 💛',
    'Alma hermosa 🌺',
    'Sonrisa contagiosa 😄',
    'Luz en nuestras vidas 🌟',
    'Bendición para todos nosotros 🙏',
    'Un regalo para el mundo 🎁',
    'Un tesoro invaluable 💎',
    'Una joya en nuestras vidas 💖',
    'Un ángel en la tierra 👼',
    'Una inspiración diaria 🌞',
    'Una persona única e irrepetible 🌟',
    'Una bendición para nuestra familia 🙌',
    'Una mujer admirable y fuerte 💪',
    'Una madre amorosa y dedicada 👩‍👧',
    'Una hija ejemplar y cariñosa 👩‍👧',
    'Una hermana maravillosa y protectora 👭',
    'Una prima querida y generosa 💕',
    'Una amiga fiel y leal 🐶',
    'Una persona que irradia amor y bondad 💖',
    'Una persona que siempre está ahí para los demás 🤗',
    'Una persona que nos ha enseñado tanto con su ejemplo ✨',
    'Una persona que ha dejado huellas imborrables en nuestras vidas 🌈',
  ];

  private paragraphs = [
    'Hoy celebramos la vida de una mujer extraordinaria: Dianita.',

    'Desde que éramos niños, siempre fuiste mucho más que una prima, hermana o familiar. Fuiste una guía.',

    'Mientras crecíamos, nos cuidaste con un amor inmenso, procurando que nada nos lastimara y enseñándonos, con tu ejemplo, a caminar por el sendero correcto.',

    'Nos enseñaste valores que han marcado nuestras vidas: la moral, la ética, el respeto y la importancia de hacer siempre lo correcto, incluso cuando no era el camino más fácil.',

    'Siempre estuviste ahí para tender una mano, para dar un consejo, para protegernos y recordarnos que la bondad y la honestidad son cualidades que nunca deben perderse.',

    'Muchas de las personas que somos hoy tienen una parte de ti en ellas, porque sembraste enseñanzas que permanecen en nuestros corazones.',

    'Con los años, la vida te regaló una de sus bendiciones más hermosas: convertirte en mamá.',

    'Y como todo lo que haces, has desempeñado ese papel de manera admirable. Eres una madre amorosa y dedicada, no solo para tu hija, sino también para esas perritas que forman parte de tu familia y reciben de ti el mismo cariño incondicional.',

    'También eres una excelente hija, una hermana maravillosa para mi mamá y un ejemplo de fortaleza, amor y compromiso para todos los que tenemos la fortuna de conocerte.',

    'Para nosotros, eres un símbolo de nobleza, de entrega y de amor familiar. Una persona que ha dejado huellas imborrables en nuestras vidas y que continúa inspirándonos cada día.',

    'En este cumpleaños quiero agradecerte por todo lo que has hecho, por todo lo que eres y por todo lo que representas para nuestra familia.',

    'Que la vida te devuelva multiplicado cada acto de amor, cada sacrificio y cada enseñanza que has compartido con quienes te rodeamos.',

    'Feliz cumpleaños, Dianita. Que este nuevo año esté lleno de salud, felicidad, sueños cumplidos y momentos inolvidables.',

    'Te queremos profundamente y nos sentimos orgullosos de tenerte en nuestras vidas. ❤️'
  ];

  ngOnInit(): void {
    this.birthdayMusic.volume = 0.1;
    this.birthdayMusic.loop = true;
    this.birthdayMusic.play()
      .catch(() => {
        console.log('Autoplay bloqueado por el navegador');
      });
    this.startExperience();
  }

  startExperience(): void {

    let index = 0;

    const interval = setInterval(() => {

      this.qualities.push({
        text: this.qualitiesList[index],
        top: Math.random() * 80 + 5,
        left: Math.random() * 80 + 5
      });

      index++;

      if (index >= this.qualitiesList.length) {

        clearInterval(interval);

        setTimeout(() => {

          this.showPhoto = true;

          this.launchConfetti();

          setTimeout(() => {
            this.showLetter = true;
            this.startLetter();
          }, 2500);

        }, 2500);
      }

    }, 700);
  }

  startLetter(): void {

    let paragraphIndex = 0;

    const letterInterval = setInterval(() => {

      this.visibleParagraphs.push(
        this.paragraphs[paragraphIndex]
      );

      paragraphIndex++;

      if (paragraphIndex >= this.paragraphs.length) {
        clearInterval(letterInterval);
      }

    }, 2500);
  }

  launchConfetti(): void {

    confetti({
      particleCount: 250,
      spread: 180,
      origin: {
        y: 0.6
      }
    });

    setInterval(() => {

      confetti({
        particleCount: 120,
        spread: 120,
        origin: {
          x: Math.random(),
          y: Math.random() * 0.5
        }
      });

    }, 4000);
  }


  ngOnDestroy(): void {

    this.birthdayMusic.pause();

    this.birthdayMusic.currentTime = 0;
  }
}