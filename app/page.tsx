"use client";

import svgPaths from "@/lib/svg-paths";
import { useBreakpoint } from "@/hooks/useBreakpoint";
// Image URLs
const imgTexturaPapel = "/textura-papel.png";
const imgTexturaPapel1 = "/textura-papel-1.png";
const imgTexturaPapel2 = "/textura-papel-2.png";
const imgFotoBodega = "/foto-bodega.png";
const imgImg51212 = "/img-5121-2.png";
const imgEucalipto = "/eucalipto.png";
const imgEucalipto1 = "/eucalipto-1.png";
const imgTexturaPapel3 = "/textura-papel-3.png";
const imgPutYourPhotoHere = "/put-your-photo-here.png";
const imgTexturaPapel4 = "/textura-papel-4.png";
const imgFotoPlaya = "/foto-playa.png";
const imgImg6959Original1 = "/img-6959-original-1.png";
const imgD53B1AdeA74F447599D2E64D3Cafb6531 = "/d53b1ade-a74f-4475-99d2-e64d3cafb653-1.png";
const imgGpTempDownload291 = "/gp-temp-download-29-1.png";
const imgImg08321 = "/img-0832-1.png";
const imgTexturaPapel5 = "/textura-papel-5.png";
const imgImg202202270250361 = "/img-20220227-025036-1.png";
const imgEucalipto2 = "/eucalipto-2.png";
const imgEucalipto3 = "/eucalipto-3.png";
const imgTexturaPapel6 = "/textura-papel-6.png";
const imgTexturaPapel7 = "/textura-papel-7.png";
const imgPutYourPhotoHere1 = "/put-your-photo-here-1.png";
const imgEucalipto4 = "/eucalipto-4.png";
const imgEucalipto5 = "/eucalipto-5.png";
const imgImg16911 = "/img-1691-1.png";
const imgImg46111 = "/img-461-1.png";
const imgImg7192Original1 = "/img-7192-original-1.png";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { X, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

/* 
import imgTexturaPapel from "figma:asset/4c1670f275f54b72357a82d4c3193f261aa5db2a.png";
import imgTexturaPapel1 from "figma:asset/131e43132b9b3bddcc9c2965d18310c0b84157c8.png";
import imgTexturaPapel2 from "figma:asset/f572150abc07805a4774b5ebac81dcc458749087.png";
import imgFotoBodega from "figma:asset/1fdee419703a37b8b559ca09e44b43d504b18a30.png";
import imgImg51212 from "figma:asset/b2567b0577bbad45155aab4adeca9555bd199fc5.png";
//import imgImg7192Original1 from "figma:asset/8efd57780d48c6a3f0963839f1f06f9f15a6c40b.png";
import imgEucalipto from "figma:asset/d334fb01ff7f163de39992ebe7eafc878269cc0e.png";
import imgEucalipto1 from "figma:asset/28545a02324a64303c3ff7ba235a124064b103a7.png";
import imgTexturaPapel3 from "figma:asset/3abd695e1e10758cc98768f00f7c18709ee2b6b0.png";
import imgPutYourPhotoHere from "figma:asset/09227415954297b7b09a1d6db836e826d0abde38.png";
import imgTexturaPapel4 from "figma:asset/c7288af5363cd4154e6b0c4791fa61ad4cc5525e.png";
import imgFotoPlaya from "figma:asset/f08e69e6eff7fa41e3dd09669b61dd5263ea2bf0.png";
import imgImg6959Original1 from "figma:asset/8ab7f18b8ddf5faac4de3e3984078298b7e2533b.png";
import imgD53B1AdeA74F447599D2E64D3Cafb6531 from "figma:asset/0de7d5fb80f55296583e8797db2af53a0aa46d97.png";
import imgGpTempDownload291 from "figma:asset/f7334d3c40b3732c751026dd3071e08fa0c12428.png";
import imgImg08321 from "figma:asset/84ad2de753e18cb1773dd14204dcc470e1d4192c.png";
import imgTexturaPapel5 from "figma:asset/e33cfc26436d5c7a91cb7c1332579eef1032620b.png";
import imgImg202202270250361 from "figma:asset/ebea212931572cc350a851e1f4241e5f4b859bd0.png";
import imgEucalipto2 from "figma:asset/1ad9b9045e9f1abbc343fea131ce8232f1a282c6.png";
import imgEucalipto3 from "figma:asset/de3307a1c5fee2ddb566494a1679fb1932d27e92.png";
import imgTexturaPapel6 from "figma:asset/85c1c023e5883d6e2d11440ba2e941200f1e6e72.png";
import imgTexturaPapel7 from "figma:asset/9d237e9de3faeb9f001fe8b0fc04c45ae9491773.png";
import imgPutYourPhotoHere1 from "figma:asset/f5f8eedf90c410d5a9df644c3fa18f59531b07db.png";
import imgEucalipto4 from "figma:asset/85eb862a2b451e5874bebfca169303b0d6c002b3.png";
import imgEucalipto5 from "figma:asset/37d0af2e0312b5fbf4582af05530be9b51762f99.png";
import { useActiveBreakpoint } from "figma:react";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { X, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

import imgImg16911 from "figma:asset/5f15aab27fb66916cf32b424e069d86abac5c119.png";
import imgImg46111 from "figma:asset/3df4f1e9730bc82be169445e53fe29eba5afb0ca.png";
import imgImg7192Original1 from "figma:asset/739e2512613d9d2df5c7275326e2471f9c26b62a.png";
 
*/

// Componente de cuenta regresiva
function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2026-05-23T17:00:00");

    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference / (1000 * 60 * 60)) % 24,
          ),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center gap-2">
      <div className="flex flex-col items-center">
        <div className="text-2xl font-serif text-[#2C3C1A]">
          {String(timeLeft.days).padStart(2, "0")}
        </div>
        <div className="text-[10px] text-[#938F38]">días</div>
      </div>
      <div className="text-xl text-[#2C3C1A]">:</div>
      <div className="flex flex-col items-center">
        <div className="text-2xl font-serif text-[#2C3C1A]">
          {String(timeLeft.hours).padStart(2, "0")}
        </div>
        <div className="text-[10px] text-[#938F38]">horas</div>
      </div>
      <div className="text-xl text-[#2C3C1A]">:</div>
      <div className="flex flex-col items-center">
        <div className="text-2xl font-serif text-[#2C3C1A]">
          {String(timeLeft.minutes).padStart(2, "0")}
        </div>
        <div className="text-[10px] text-[#938F38]">min</div>
      </div>
      <div className="text-xl text-[#2C3C1A]">:</div>
      <div className="flex flex-col items-center">
        <div className="text-2xl font-serif text-[#2C3C1A]">
          {String(timeLeft.seconds).padStart(2, "0")}
        </div>
        <div className="text-[10px] text-[#938F38]">seg</div>
      </div>
    </div>
  );
}

// Componente de control de música flotante
function FloatingMusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Inicializar el elemento de audio
  useEffect(() => {
    setMounted(true);

    if (PLAYLIST_CANCIONES.length > 0) {
      const audio = new Audio();
      audio.volume = 0.5; // Volumen al 50%
      audio.preload = "auto";
      audioRef.current = audio;

      console.log("🎵 Reproductor de música inicializado");
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = "";
        audioRef.current = null;
      }
      setMounted(false);
    };
  }, []);

  // Manejar el cambio de canción y el evento 'ended'
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || PLAYLIST_CANCIONES.length === 0) return;

    // Establecer la fuente de audio con tipo MIME
    const url = PLAYLIST_CANCIONES[currentSongIndex];
    audio.src = url;

    console.log(
      `🎵 Cargando canción ${currentSongIndex + 1}/${PLAYLIST_CANCIONES.length}`,
    );
    console.log(`🎵 URL: ${url}`);

    // Variable para saber si debemos reproducir automáticamente
    const shouldAutoPlay = isPlaying;

    // Handler para cuando termina la canción
    const handleEnded = () => {
      console.log("🎵 Canción terminada, siguiente...");
      const nextIndex =
        (currentSongIndex + 1) % PLAYLIST_CANCIONES.length;
      setCurrentSongIndex(nextIndex);
    };

    // Handler para errores de carga
    const handleError = (e: Event) => {
      console.error("❌ Error al cargar el audio:", e);
      console.error("❌ Error del elemento:", audio.error);
      setIsPlaying(false);
    };

    // Handler para cuando el audio está listo
    const handleCanPlay = () => {
      console.log("✅ Audio listo para reproducir");
      // Intentar reproducir automáticamente
      console.log("🎵 Intentando autoplay...");
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
          console.log("✅ Autoplay exitoso");
        })
        .catch((err) => {
          console.log("⚠️ Autoplay bloqueado por el navegador:", err);
          // Intentar reproducir silenciado (más probable que funcione según políticas de navegador)
          audio.muted = true;
          audio.play()
            .then(() => {
              setIsPlaying(true);
              console.log("✅ Playback silenciado iniciado como respaldo");
            })
            .catch(e => {
              console.log("❌ Playback silenciado también falló:", e);
            });
          console.log(
            "💡 El audio se activará completamente con la primera interacción del usuario",
          );
        });
    };

    // Respaldo: Activar música con la primera interacción en cualquier parte del documento
    // Esto es necesario para el des-silenciado y para navegadores restrictivos
    const handleFirstInteraction = () => {
      if (audioRef.current) {
        if (audioRef.current.muted) {
          console.log("🖱️ Primera interacción - quitando silencio...");
          audioRef.current.muted = false;
        }

        if (!isPlaying) {
          console.log("🖱️ Primera interacción detectada, iniciando música...");
          audioRef.current
            .play()
            .then(() => {
              setIsPlaying(true);
              console.log("✅ Música iniciada tras interacción");
            })
            .catch((err) => {
              console.error("❌ Error al reproducir tras interacción:", err);
            });
        }
      }
      // Eliminar los listeners después de la primera interacción
      document.removeEventListener("click", handleFirstInteraction);
      document.removeEventListener("touchstart", handleFirstInteraction);
      document.removeEventListener("scroll", handleFirstInteraction);
    };

    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("error", handleError);
    audio.addEventListener("canplaythrough", handleCanPlay);
    document.addEventListener("click", handleFirstInteraction);
    document.addEventListener("touchstart", handleFirstInteraction);
    document.addEventListener("scroll", handleFirstInteraction);

    // Intentar cargar el audio
    audio.load();

    return () => {
      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener("error", handleError);
      audio.removeEventListener("canplaythrough", handleCanPlay);
      document.removeEventListener("click", handleFirstInteraction);
      document.removeEventListener("touchstart", handleFirstInteraction);
      document.removeEventListener("scroll", handleFirstInteraction);
    };
  }, [currentSongIndex]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio || PLAYLIST_CANCIONES.length === 0) {
      console.log("⚠️ No hay audio disponible");
      return;
    }

    if (isPlaying) {
      console.log("⏸️ Pausando música");
      audio.pause();
      setIsPlaying(false);
    } else {
      console.log("▶️ Reproduciendo música");
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
          console.log("✅ Reproducción iniciada correctamente");
        })
        .catch((err) => {
          console.error("❌ Error al reproducir:", err);
          setIsPlaying(false);
        });
    }
  };

  if (
    !mounted ||
    typeof document === "undefined" ||
    PLAYLIST_CANCIONES.length === 0
  )
    return null;

  const buttonContent = (
    <motion.div
      style={{
        position: "fixed",
        bottom: "2rem",
        right: "2rem",
        zIndex: 99998,
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.button
        onClick={togglePlay}
        style={{
          backgroundColor: "#938f38",
          color: "white",
          borderRadius: "50%",
          width: "56px",
          height: "56px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "none",
          cursor: "pointer",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
          transition: "all 0.3s ease",
          position: "relative",
        }}
        animate={
          isPlaying
            ? {
              scale: [1, 1.05, 1],
            }
            : {}
        }
        transition={{
          duration: 1.5,
          repeat: isPlaying ? Infinity : 0,
          ease: "easeInOut",
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Ondas de sonido animadas cuando está reproduciendo */}
        {isPlaying && (
          <>
            <motion.div
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                border: "2px solid white",
                opacity: 0.6,
              }}
              animate={{
                scale: [1, 1.4, 1.4],
                opacity: [0.6, 0, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />
            <motion.div
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                border: "2px solid white",
                opacity: 0.6,
              }}
              animate={{
                scale: [1, 1.4, 1.4],
                opacity: [0.6, 0, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut",
                delay: 0.5,
              }}
            />
          </>
        )}

        {/* Icono de música o pausa */}
        {isPlaying ? (
          // Icono de pausa
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="white"
            stroke="none"
          >
            <rect x="6" y="4" width="4" height="16" rx="1" />
            <rect x="14" y="4" width="4" height="16" rx="1" />
          </svg>
        ) : (
          // Icono de música
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 18V5l12-2v13" />
            <circle cx="6" cy="18" r="3" />
            <circle cx="18" cy="16" r="3" />
          </svg>
        )}
      </motion.button>
    </motion.div>
  );

  return createPortal(buttonContent, document.body);
}

// URLs DE LOS LINKS
const URL_COMO_LLEGAR_CEREMONIA =
  "https://maps.app.goo.gl/S3Yk5Q2PZPMocz3o6";
const URL_COMO_LLEGAR_FIESTA =
  "https://maps.app.goo.gl/zDreD5U7K2jKMYhf8";
const URL_INSTAGRAM = "https://www.instagram.com/casamientoluliysanti?igsh=czlyY29mNG42NnJw";
const URL_PLAYLIST = "https://open.spotify.com/playlist/0lBRB4gQQlQmtNCOy2aicR?si=kuMPP5rLTK2oSSY3QI_X7w&pi=h9WMl4FCT2uVJ";
const URL_ALBUM = "https://web.dotstheapp.com/a?group=2381973&dlBy=santiagoreitano&code=EWd3ut9wpMMI&utm_source=guest&utm_medium=share&utm_campaign=guest_event_album&force_app=1";
const URL_PINTEREST = "https://www.pinterest.com";

// 🎵 CONFIGURACIÓN DE MÚSICA
// URLs directas de GitHub - perfecto para streaming de audio
// Para agregar más canciones:
// 1. Sube el MP3 a tu repositorio de GitHub
// 2. Ve al archivo → Click en "Raw" → Copia la URL
// 3. Pégala en el array de abajo
const PLAYLIST_CANCIONES = [
  "/Ed Sheeran & Beyoncé - Perfect Duet  ESPAÑOL  LYRICS.mp3",
  // Agrega más canciones aquí (se reproducirán en bucle):
  // "https://github.com/santiagoreitano/canciones/raw/refs/heads/main/otra-cancion.mp3",
];

// Variable global para el ID de Google Sheets
export let GOOGLE_SHEET_ID = "";

// Función para actualizar el ID global
export function setGoogleSheetId(id: string) {
  GOOGLE_SHEET_ID = id;
}

// URL de Google Apps Script - CONFIGURAR AQUÍ
const GOOGLE_APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyA1FnnEIvXdqPA_uZn6QGLWGAyhPgA-H3J5Jws4esT6j9YC8M9JcYZ8Mx4X_PBLwQV/exec";

// Función para actualizar confirmaciones en Google Sheets
export async function updateConfirmacion(
  data: InvitacionData,
): Promise<boolean> {
  try {
    console.log(
      "Datos enviados a Google Sheets:",
      JSON.stringify(
        {
          id: data.id,
          personas: data.personas,
        },
        null,
        2,
      ),
    );

    const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: data.id,
        personas: data.personas,
      }),
    });

    return true;
  } catch (error) {
    console.error("Error al actualizar confirmación:", error);
    return false;
  }
}

// Tipos para los datos de Google Sheets
export type Persona = {
  nombre: string;
  asistir: boolean;
  restriccionesAlimentarias: string;
};

export type InvitacionData = {
  id: string;
  pagaTarjeta: boolean;
  personas: Persona[];
};

// Componente de error
function ErrorMessage() {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center p-8">
      <div className="bg-[#f5f5dc] rounded-lg shadow-2xl p-12 max-w-md w-full border-4 border-[#938F38] relative">
        <img
          src={imgEucalipto}
          alt=""
          className="absolute top-4 left-4 w-16 h-16 opacity-30"
        />
        <img
          src={imgEucalipto1}
          alt=""
          className="absolute bottom-4 right-4 w-16 h-16 opacity-30"
        />
        <div className="text-center relative z-10">
          <h2
            className="text-3xl mb-6 text-[#2C3C1A]"
            style={{ fontFamily: "serif" }}
          >
            Oops...
          </h2>
          <p className="text-lg text-[#2C3C1A] mb-8 leading-relaxed">
            Hubo un error al cargar tu invitación.
          </p>
          <p className="text-base text-[#2C3C1A] leading-relaxed">
            Por favor, comunicate con{" "}
            <span className="font-semibold">Santi</span> o{" "}
            <span className="font-semibold">Luli</span>
          </p>
        </div>
      </div>
    </div>
  );
}

// Componente de botón con estilo de modal/tarjeta
function StyledButton({
  children,
  onClick,
  className = "",
  variant = "primary", // primary = dorado, secondary = verde oscuro
  href, // Si es un link externo
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary";
  href?: string;
}) {
  const bgColor =
    variant === "primary" ? "bg-[#938f38]" : "bg-[#2c3c1a]";
  const hoverColor =
    variant === "primary"
      ? "hover:bg-[#7a7530]"
      : "hover:bg-[#1f2914]";

  const buttonClasses = `
    ${bgColor} ${hoverColor}
    text-white
    px-[10.426px] py-[3.475px] 
    rounded-[96.965px]
    shadow-lg hover:shadow-xl
    transition-all duration-300
    transform hover:scale-105
    active:scale-95
    border-2 border-transparent
    hover:border-white/20
    ${className}
  `;

  // Si tiene href, renderizamos como un link
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClasses}
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          textDecoration: "none",
        }}
      >
        {children}
      </a>
    );
  }

  // Si no tiene href, renderizamos como botón
  return (
    <button onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
}

// Modal Confirmar Asistencia Component
function ModalConfirmarAsistencia({
  onClose,
  data,
  onDataUpdate,
}: {
  onClose: () => void;
  data: InvitacionData;
  onDataUpdate: (updatedData: InvitacionData) => void;
}) {
  const [confirmados, setConfirmados] = useState<boolean[]>(
    data.personas.map((p) => p.asistir),
  );
  const [
    restriccionesPorInvitado,
    setRestriccionesPorInvitado,
  ] = useState<string[]>(
    data.personas.map((p) => p.restriccionesAlimentarias || ""),
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [mounted, setMounted] = useState(false);

  // Montar el componente
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Bloquear scroll del body cuando el modal está abierto
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const toggleConfirmacion = (index: number) => {
    const nuevosConfirmados = [...confirmados];
    nuevosConfirmados[index] = !nuevosConfirmados[index];
    setConfirmados(nuevosConfirmados);
  };

  const updateRestriccion = (index: number, valor: string) => {
    const nuevasRestricciones = [...restriccionesPorInvitado];
    nuevasRestricciones[index] = valor;
    setRestriccionesPorInvitado(nuevasRestricciones);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSubmitMessage("");
    setErrorMessage("");

    try {
      // Actualizar los datos con las confirmaciones
      const updatedData: InvitacionData = {
        ...data,
        personas: data.personas.map((persona, index) => ({
          ...persona,
          asistir: confirmados[index],
          restriccionesAlimentarias: (
            restriccionesPorInvitado[index] || ""
          ).trim(),
        })),
      };

      const result = await updateConfirmacion(updatedData);

      if (result) {
        // Actualizar el estado del componente padre
        onDataUpdate(updatedData);

        const cantidadConfirmados = confirmados.filter(
          (c) => c,
        ).length;

        if (cantidadConfirmados === 0) {
          setSubmitMessage(
            "Seleccionaste que ningún invitado puede asistir",
          );
        } else {
          setSubmitMessage(
            `¡Asistencia confirmada para ${cantidadConfirmados} persona(s)! ✓`,
          );
        }

        setTimeout(() => {
          onClose();
        }, 2000);
      } else {
        setErrorMessage(
          "Hubo un error. Por favor, intenta nuevamente.",
        );
      }
    } catch (error) {
      console.error("Error al enviar:", error);
      setErrorMessage(
        "Hubo un error. Por favor, intenta nuevamente.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!mounted || typeof document === "undefined") return null;

  const modalContent = (
    <motion.div
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 99999,
        padding: "1rem",
        backdropFilter: "blur(12px)",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
      }}
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        style={{
          backgroundColor: "#F6F6F0",
          borderRadius: "8px",
          position: "relative",
          maxWidth: "28rem",
          width: "100%",
          padding: "2rem",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        }}
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* Eucalipto superior izquierdo */}
        <div
          style={{
            position: "absolute",
            top: "-2rem",
            left: "-2rem",
            display: "flex",
            height: "6rem",
            alignItems: "center",
            justifyContent: "center",
            width: "6rem",
            overflow: "hidden",
          }}
        >
          <div style={{ transform: "rotate(119.68deg)" }}>
            <img
              alt=""
              style={{
                height: "5rem",
                width: "5rem",
                objectFit: "cover",
              }}
              src={imgEucalipto}
            />
          </div>
        </div>

        {/* Eucalipto inferior derecho */}
        <div
          style={{
            position: "absolute",
            bottom: "-2rem",
            right: "-2rem",
            display: "flex",
            height: "6rem",
            alignItems: "center",
            justifyContent: "center",
            width: "6rem",
            overflow: "hidden",
          }}
        >
          <div style={{ transform: "rotate(-14.4deg)" }}>
            <img
              alt=""
              style={{
                height: "5rem",
                width: "5rem",
                objectFit: "cover",
              }}
              src={imgEucalipto}
            />
          </div>
        </div>

        {/* Botón cerrar */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",

            background: "none",
            border: "none",
            cursor: "pointer",
            zIndex: 10,
          }}
        >
          <X size={24} />
        </button>

        {/* Contenido del modal */}
        <div
          style={{
            textAlign: "center",
            color: "rgb(44 60 26)",
          }}
        >
          <div
            className={`content-stretch flex flex-col gap-[22.59px] items-center left-[55.91px] right-[54.95px]  top-[2860px]`}
            data-name="SECCION ASISTENCIA"
          >
            <div
              className="relative shrink-0 w-full max-w-[390px] h-auto"
              style={{
                marginBottom: "1rem",
                marginTop: "1.5rem",
              }}
              data-name="Section title"
            >
              <svg
                className="block w-full h-auto"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 262.777 19.5515"
              >
                <g id="Section title">
                  <path
                    d={svgPaths.p1b9aa580}
                    fill="var(--fill-0, rgb(44, 60, 26))"
                    id="Vector"
                  />
                  <path
                    d={svgPaths.p33bdc270}
                    fill="var(--fill-0, rgb(44, 60, 26))"
                    id="Vector_2"
                  />
                  <path
                    d={svgPaths.p2cf7f800}
                    fill="var(--fill-0, rgb(44, 60, 26))"
                    id="Vector_3"
                  />
                  <path
                    d={svgPaths.p337a800}
                    fill="var(--fill-0, rgb(44, 60, 26))"
                    id="Vector_4"
                  />
                  <path
                    d={svgPaths.pca45700}
                    fill="var(--fill-0, rgb(44, 60, 26))"
                    id="Vector_5"
                  />
                  <path
                    d={svgPaths.p3be50400}
                    fill="var(--fill-0, rgb(44, 60, 26))"
                    id="Vector_6"
                  />
                  <path
                    d={svgPaths.p3a850100}
                    fill="var(--fill-0, rgb(44, 60, 26))"
                    id="Vector_7"
                  />
                  <path
                    d={svgPaths.p38020200}
                    fill="var(--fill-0, rgb(44, 60, 26))"
                    id="Vector_8"
                  />
                  <path
                    d={svgPaths.p3ace2570}
                    fill="var(--fill-0, rgb(44, 60, 26))"
                    id="Vector_9"
                  />
                  <path
                    d={svgPaths.p37f50600}
                    fill="var(--fill-0, rgb(44, 60, 26))"
                    id="Vector_10"
                  />
                  <path
                    d={svgPaths.p10761e00}
                    fill="var(--fill-0, rgb(44, 60, 26))"
                    id="Vector_11"
                  />
                  <path
                    d={svgPaths.p30fd9c80}
                    fill="var(--fill-0, rgb(44, 60, 26))"
                    id="Vector_12"
                  />
                  <path
                    d={svgPaths.p358dd400}
                    fill="var(--fill-0, rgb(44, 60, 26))"
                    id="Vector_13"
                  />
                  <path
                    d={svgPaths.p3abb8100}
                    fill="var(--fill-0, rgb(44, 60, 26))"
                    id="Vector_14"
                  />
                  <path
                    d={svgPaths.p2bda7780}
                    fill="var(--fill-0, rgb(44, 60, 26))"
                    id="Vector_15"
                  />
                  <path
                    d={svgPaths.p3b4d7a80}
                    fill="var(--fill-0, rgb(44, 60, 26))"
                    id="Vector_16"
                  />
                  <path
                    d={svgPaths.p233a0600}
                    fill="var(--fill-0, rgb(44, 60, 26))"
                    id="Vector_17"
                  />
                  <path
                    d={svgPaths.p34183c00}
                    fill="var(--fill-0, rgb(44, 60, 26))"
                    id="Vector_18"
                  />
                  <path
                    d={svgPaths.p26878e00}
                    fill="var(--fill-0, rgb(44, 60, 26))"
                    id="Vector_19"
                  />
                </g>
              </svg>
            </div>
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <p
              style={{
                fontFamily: "'Raleway:Medium',sans-serif",
                fontSize: "14px",
                lineHeight: "1.625",
              }}
            >
              Selecciona quiénes asistirán al evento
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            style={{ marginTop: "1rem" }}
          >
            {/* Lista de invitados */}
            <div
              style={{
                textAlign: "left",
                maxHeight: "40vh",
                overflowY: "auto",
                paddingRight: "5px",
              }}
            >
              {data.personas.map((persona, index) => (
                <div
                  key={index}
                  style={{ marginBottom: "0.75rem" }}
                >
                  <div
                    onClick={() => toggleConfirmacion(index)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      padding: "0.75rem 1rem",
                      borderRadius: "8px",
                      cursor: "pointer",
                      transition: "all 0.3s",
                      backgroundColor: confirmados[index]
                        ? "rgba(147, 143, 56, 0.3)"
                        : "rgba(255, 255, 255, 0.1)",
                      border: confirmados[index]
                        ? "2px solid #938f38"
                        : "2px solid rgb(147, 143, 56)",
                    }}
                  >
                    <div
                      style={{
                        width: "1.5rem",
                        height: "1.5rem",
                        borderRadius: "6px",
                        border: "2px solid",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        transition: "all 0.3s",
                        backgroundColor: confirmados[index]
                          ? "#938f38"
                          : "transparent",
                        borderColor: confirmados[index]
                          ? "#938f38"
                          : "rgb(147, 143, 56)",
                      }}
                    >
                      {confirmados[index] && (
                        <Check
                          size={16}
                          style={{ color: "white" }}
                        />
                      )}
                    </div>
                    <div style={{ flex: 1 }}>
                      <p
                        style={{
                          fontFamily:
                            "'Raleway:Medium',sans-serif",
                          fontSize: "15px",
                          color: "rgb(44 60 26)",
                        }}
                      >
                        {persona.nombre}
                      </p>
                    </div>
                  </div>

                  {/* Campo de restricciones individuales - solo visible si está confirmado */}
                  {confirmados[index] && (
                    <div
                      style={{
                        paddingLeft: "2.25rem",
                        marginTop: "0.5rem",
                      }}
                    >
                      <input
                        type="text"
                        value={restriccionesPorInvitado[index]}
                        onChange={(e) =>
                          updateRestriccion(
                            index,
                            e.target.value,
                          )
                        }
                        placeholder="Ingresá restricción alimentaria..."
                        style={{
                          width: "100%",
                          padding: "0.5rem 0.75rem",
                          borderRadius: "8px",

                          border: "2px solid rgb(147, 143, 56)",
                          color: "rgb(44, 60, 26)",
                          fontFamily:
                            "'Raleway:Regular',sans-serif",
                          fontSize: "13px",
                          outline: "none",

                          backgroundColor: "rgb(246, 246, 240)",
                        }}
                        onClick={(e) => e.stopPropagation()}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {errorMessage && (
              <p
                style={{
                  fontSize: "12px",
                  fontFamily: "'Raleway:Medium',sans-serif",
                  color: "#f87171",
                  marginTop: "1rem",
                }}
              >
                {errorMessage}
              </p>
            )}

            {submitMessage && (
              <p
                style={{
                  fontSize: "12px",
                  fontFamily: "'Raleway:Medium',sans-serif",
                  color: "#938f38",
                  marginTop: "1rem",
                }}
              >
                {submitMessage}
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                width: "100%",
                backgroundColor: isSubmitting
                  ? "rgba(147, 143, 56, 0.5)"
                  : "#938f38",
                padding: "0.5rem 1.5rem",
                borderRadius: "9999px",
                marginTop: "1.5rem",
                cursor: isSubmitting
                  ? "not-allowed"
                  : "pointer",
                textAlign: "center",
                border: "none",
                color: "white",
              }}
            >
              <span
                style={{
                  fontFamily: "'Raleway:Bold',sans-serif",
                  fontSize: "13px",
                }}
              >
                {isSubmitting ? "ENVIANDO..." : "CONFIRMAR"}
              </span>
            </button>
          </form>
        </div>
      </motion.div>
    </motion.div>
  );

  return createPortal(modalContent, document.body);
}

// Modal Tarjeta Component
function ModalTarjeta({ onClose }: { onClose: () => void }) {
  const [mounted, setMounted] = useState(false);
  const [toast, setToast] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  // Montar el componente
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Bloquear scroll del body cuando el modal está abierto
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  if (!mounted || typeof document === "undefined") return null;

  const modalContent = (
    <motion.div
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 99999,
        padding: "1rem",
        backdropFilter: "blur(12px)",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
      }}
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        style={{
          backgroundColor: "#F6F6F0",
          borderRadius: "8px",
          position: "relative",
          maxWidth: "28rem",
          width: "100%",
          padding: "2rem",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        }}
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* Eucalipto superior izquierdo */}
        <div
          style={{
            position: "absolute",
            top: "-2rem",
            left: "-2rem",
            display: "flex",
            height: "6rem",
            alignItems: "center",
            justifyContent: "center",
            width: "6rem",
            overflow: "hidden",
          }}
        >
          <div style={{ transform: "rotate(119.68deg)" }}>
            <img
              alt=""
              style={{
                height: "5rem",
                width: "5rem",
                objectFit: "cover",
              }}
              src={imgEucalipto}
            />
          </div>
        </div>

        {/* Eucalipto inferior derecho */}
        <div
          style={{
            position: "absolute",
            bottom: "-2rem",
            right: "-2rem",
            display: "flex",
            height: "6rem",
            alignItems: "center",
            justifyContent: "center",
            width: "6rem",
            overflow: "hidden",
          }}
        >
          <div style={{ transform: "rotate(-14.4deg)" }}>
            <img
              alt=""
              style={{
                height: "5rem",
                width: "5rem",
                objectFit: "cover",
              }}
              src={imgEucalipto}
            />
          </div>
        </div>

        {/* Botón cerrar */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            background: "none",
            border: "none",
            cursor: "pointer",
            zIndex: 10,
          }}
        >
          <X size={24} />
        </button>

        {/* Contenido del modal */}
        <div
          style={{
            textAlign: "center",
            color: "rgb(44,60,26)",
          }}
        >
          <div
            style={{
              textAlign: "center",
              color: "rgb(44 60 26)",
            }}
          >
            <div
              style={{
                margin: "1rem auto 1.5rem auto",

                width: "100%",
                maxWidth: "120px",
                display: "block",
              }}
              data-name="Section title"
            >
              <svg
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                }}
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 92.7855 19.2543"
              >
                <g id="Section title">
                  <path
                    d={svgPaths.pd78f580}
                    fill="var(--fill-0,rgb(44, 60, 26))"
                    id="Vector"
                  />
                  <path
                    d={svgPaths.p1a3f4d80}
                    fill="var(--fill-0, rgb(44, 60, 26))"
                    id="Vector_2"
                  />
                  <path
                    d={svgPaths.p10356580}
                    fill="var(--fill-0, rgb(44, 60, 26))"
                    id="Vector_3"
                  />
                  <path
                    d={svgPaths.p307a0c00}
                    fill="var(--fill-0, rgb(44, 60, 26))"
                    id="Vector_4"
                  />
                  <path
                    d={svgPaths.p22b46d00}
                    fill="var(--fill-0, rgb(44, 60, 26))"
                    id="Vector_5"
                  />
                  <path
                    d={svgPaths.p3a174780}
                    fill="var(--fill-0, rgb(44, 60, 26))"
                    id="Vector_6"
                  />
                  <path
                    d={svgPaths.p2298e00}
                    fill="var(--fill-0, rgb(44, 60, 26))"
                    id="Vector_7"
                  />
                </g>
              </svg>
            </div>
          </div>
          <p
            style={{
              fontFamily: "'Raleway:Medium',sans-serif",
              fontSize: "14px",
              lineHeight: "1.625",
            }}
          >
            Tu colaboración con la tarjeta nos ayuda a poder
            lograr que compartamos juntos este gran día.
          </p>
          <div
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              padding: "1rem",
              borderRadius: "8px",
            }}
          >
            <p
              style={{
                fontSize: "14px",
                marginBottom: "0.5rem",
                fontFamily: "'Raleway:Medium',sans-serif",
                textAlign: "left",
              }}
            >
              <b>Propietario:</b> MARIA LOURDES PUNTIN ANGELINO{" "}
              <br></br>
              <b>CBU:</b> 3840200500000049011557<br></br>
              <b>Alias:</b> casamientoluliysanti<br></br>
              <b>Banco:</b> Ualá Bank S.A.U.
            </p>
          </div>
          <button
            onClick={async () => {
              const cbu = "3840200500000049011557";
              try {
                await navigator.clipboard.writeText(cbu);
                setToast({
                  type: "success",
                  text: "CBU copiado correctamente",
                });
              } catch {
                try {
                  // fallback navegadores viejos
                  const textarea =
                    document.createElement("textarea");
                  textarea.value = cbu;
                  document.body.appendChild(textarea);
                  textarea.select();
                  document.execCommand("copy");
                  document.body.removeChild(textarea);

                  setToast({
                    type: "success",
                    text: "CBU copiado correctamente",
                  });
                } catch {
                  setToast({
                    type: "error",
                    text: "No se pudo copiar el CBU",
                  });
                }
              }

              setTimeout(() => setToast(null), 2500);
            }}
            style={{
              width: "100%",
              backgroundColor: "#938f38",
              padding: "0.5rem 1.5rem",
              borderRadius: "9999px",
              cursor: "pointer",
              textAlign: "center",
              border: "none",
              color: "white",
            }}
          >
            Copiar CBU
          </button>
        </div>
        <AnimatePresence>
          {toast && (
            <motion.div
              initial={{ opacity: 0, y: -20, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: -20, x: "-50%" }}
              transition={{ duration: 0.25 }}
              style={{
                position: "fixed",
                top: "24px",
                left: "50%",
                transform: "translateX(-50%)",
                padding: "14px 22px",
                borderRadius: "999px",
                color: "white",
                fontWeight: 500,
                backgroundColor:
                  toast.type === "success"
                    ? "rgb(147, 143, 56)"
                    : "#dc2626",
                boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
                zIndex: 100000,
                backdropFilter: "blur(6px)",
                letterSpacing: "0.2px",
                pointerEvents: "none",
                whiteSpace: "nowrap",
              }}
            >
              {toast.text}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );

  return createPortal(modalContent, document.body);
}

// Modal Regalos Component
function ModalRegalos({ onClose }: { onClose: () => void }) {
  const [mounted, setMounted] = useState(false);
  const [toast, setToast] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  // Montar el componente
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Bloquear scroll del body cuando el modal está abierto
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  if (!mounted || typeof document === "undefined") return null;

  const modalContent = (
    <motion.div
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 99999,
        padding: "1rem",
        backdropFilter: "blur(12px)",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
      }}
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        style={{
          backgroundColor: "#F6F6F0",
          borderRadius: "8px",
          position: "relative",
          maxWidth: "28rem",
          width: "100%",
          padding: "2rem",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        }}
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* Eucalipto superior izquierdo */}
        <div
          style={{
            position: "absolute",
            top: "-2rem",
            left: "-2rem",
            display: "flex",
            height: "6rem",
            alignItems: "center",
            justifyContent: "center",
            width: "6rem",
            overflow: "hidden",
          }}
        >
          <div style={{ transform: "rotate(119.68deg)" }}>
            <img
              alt=""
              style={{
                height: "5rem",
                width: "5rem",
                objectFit: "cover",
              }}
              src={imgEucalipto}
            />
          </div>
        </div>

        {/* Eucalipto inferior derecho */}
        <div
          style={{
            position: "absolute",
            bottom: "-2rem",
            right: "-2rem",
            display: "flex",
            height: "6rem",
            alignItems: "center",
            justifyContent: "center",
            width: "6rem",
            overflow: "hidden",
          }}
        >
          <div style={{ transform: "rotate(-14.4deg)" }}>
            <img
              alt=""
              style={{
                height: "5rem",
                width: "5rem",
                objectFit: "cover",
              }}
              src={imgEucalipto}
            />
          </div>
        </div>

        {/* Botón cerrar */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            background: "none",
            border: "none",
            cursor: "pointer",
            zIndex: 10,
          }}
        >
          <X size={24} />
        </button>

        {/* Contenido del modal */}
        <div
          style={{
            textAlign: "center",
            color: "rgb(44, 60, 26)",
          }}
        >
          <div
            style={{
              textAlign: "center",
              color: "rgb(44 60 26)",
            }}
          >
            <div
              className="h-[30px] relative shrink-0 w-[138px]"
              style={{
                margin: "1rem auto 1.5rem auto",
                width: "100%",
                maxWidth: "120px",
                display: "block",
              }}
              data-name="Section title"
            >
              <svg
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                }}
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 92.7855 28.2543"
              >
                <g id="Section title">
                  <path
                    d={svgPaths.p1ad9ed00}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector"
                  />
                  <path
                    d={svgPaths.p526f200}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_2"
                  />
                  <path
                    d={svgPaths.p2fcfea00}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_3"
                  />
                  <path
                    d={svgPaths.p35e388b0}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_4"
                  />
                  <path
                    d={svgPaths.p1da11800}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_5"
                  />
                  <path
                    d={svgPaths.p2c3e4000}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_6"
                  />
                </g>
              </svg>
            </div>
          </div>
          <p
            style={{
              fontFamily: "'Raleway:Medium',sans-serif",
              fontSize: "14px",
              lineHeight: "1.625",
              marginBottom: "0.5rem",
            }}
          >
            Tu presencia es lo más importante para nosotros en
            este día tan especial. <br></br>
            Si además querés hacernos un regalo, podés hacerlo a
            través de la siguiente cuenta:
          </p>
          <div
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              padding: "1rem",
              borderRadius: "8px",
            }}
          >
            <p
              style={{
                fontSize: "14px",
                marginBottom: "0.5rem",
                fontFamily: "'Raleway:Medium',sans-serif",
                textAlign: "left",
              }}
            >
              <b>Propietario:</b> MARIA LOURDES PUNTIN ANGELINO{" "}
              <br></br>
              <b>CBU:</b> 3840200500000049011557<br></br>
              <b>Alias:</b> casamientoluliysanti<br></br>
              <b>Banco:</b> Ualá Bank S.A.U.
            </p>
          </div>
          <button
            onClick={async () => {
              const cbu = "3840200500000049011557";
              try {
                await navigator.clipboard.writeText(cbu);
                setToast({
                  type: "success",
                  text: "CBU copiado correctamente",
                });
              } catch {
                try {
                  // fallback navegadores viejos
                  const textarea =
                    document.createElement("textarea");
                  textarea.value = cbu;
                  document.body.appendChild(textarea);
                  textarea.select();
                  document.execCommand("copy");
                  document.body.removeChild(textarea);

                  setToast({
                    type: "success",
                    text: "CBU copiado correctamente",
                  });
                } catch {
                  setToast({
                    type: "error",
                    text: "No se pudo copiar el CBU",
                  });
                }
              }

              setTimeout(() => setToast(null), 2500);
            }}
            style={{
              width: "100%",
              backgroundColor: "#938f38",
              padding: "0.5rem 1.5rem",
              borderRadius: "9999px",
              cursor: "pointer",
              textAlign: "center",
              border: "none",
              color: "white",
            }}
          >
            Copiar CBU
          </button>
        </div>
        <AnimatePresence>
          {toast && (
            <motion.div
              initial={{ opacity: 0, y: -20, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: -20, x: "-50%" }}
              transition={{ duration: 0.25 }}
              style={{
                position: "fixed",
                top: "24px",
                left: "50%",
                transform: "translateX(-50%)",
                padding: "14px 22px",
                borderRadius: "999px",
                color: "white",
                fontWeight: 500,
                backgroundColor:
                  toast.type === "success"
                    ? "rgb(147, 143, 56)"
                    : "#dc2626",
                boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
                zIndex: 100000,
                backdropFilter: "blur(6px)",
                letterSpacing: "0.2px",
                pointerEvents: "none",
                whiteSpace: "nowrap",
              }}
            >
              {toast.text}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );

  return createPortal(modalContent, document.body);
}

// Modal Dress Code
function ModalDressCode({ onClose }: { onClose: () => void }) {
  const [mounted, setMounted] = useState(false);

  // Montar el componente
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Bloquear scroll del body cuando el modal está abierto
  useEffect(() => {
    console.log("ModalDressCode montado!");
    document.body.style.overflow = "hidden";
    return () => {
      console.log("ModalDressCode desmontado!");
      document.body.style.overflow = "unset";
    };
  }, []);

  if (!mounted || typeof document === "undefined") return null;

  const modalContent = (
    <motion.div
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 99999,
        padding: "1rem",
        backdropFilter: "blur(12px)",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
      }}
      onClick={(e) => {
        console.log("Click en overlay del modal");
        onClose();
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        style={{
          backgroundColor: "#F6F6F0",
          borderRadius: "8px",
          position: "relative",
          maxWidth: "28rem",
          width: "100%",
          padding: "2rem",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        }}
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* Eucalipto superior izquierdo */}
        <div
          style={{
            position: "absolute",
            top: "-2rem",
            left: "-2rem",
            display: "flex",
            height: "6rem",
            alignItems: "center",
            justifyContent: "center",
            width: "6rem",
            overflow: "hidden",
          }}
        >
          <div style={{ transform: "rotate(119.68deg)" }}>
            <img
              alt=""
              style={{
                height: "5rem",
                width: "5rem",
                objectFit: "cover",
              }}
              src={imgEucalipto}
            />
          </div>
        </div>

        {/* Eucalipto inferior derecho */}
        <div
          style={{
            position: "absolute",
            bottom: "-2rem",
            right: "-2rem",
            display: "flex",
            height: "6rem",
            alignItems: "center",
            justifyContent: "center",
            width: "6rem",
            overflow: "hidden",
          }}
        >
          <div style={{ transform: "rotate(-14.4deg)" }}>
            <img
              alt=""
              style={{
                height: "5rem",
                width: "5rem",
                objectFit: "cover",
              }}
              src={imgEucalipto}
            />
          </div>
        </div>

        {/* Botón cerrar */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            background: "none",
            border: "none",
            cursor: "pointer",
            zIndex: 10,
          }}
        >
          <X size={24} />
        </button>

        {/* Contenido del modal */}
        <div
          style={{
            textAlign: "center",
            color: "rgb(44 60 26)",
          }}
        >
          <div
            className="h-[30px] relative shrink-0 w-[203px]"
            data-name="Section title"
            style={{
              margin: "1rem auto 1.5rem auto",
              width: "100%",
              maxWidth: "180px",
              display: "block",
            }}
          >
            <svg
              style={{
                width: "100%",
                height: "auto",
                display: "block",
              }}
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 135.952 19.5515"
            >
              <g id="Section title">
                <path
                  d={svgPaths.p16c3d300}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector"
                />
                <path
                  d={svgPaths.p9d4d80}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_2"
                />
                <path
                  d={svgPaths.p3c800700}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_3"
                />
                <path
                  d={svgPaths.p3219780}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_4"
                />
                <path
                  d={svgPaths.p184e9800}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_5"
                />
                <path
                  d={svgPaths.p3596a800}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_6"
                />
                <path
                  d={svgPaths.p35085880}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_7"
                />
                <path
                  d={svgPaths.p3b3430}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_8"
                />
                <path
                  d={svgPaths.pd185100}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_9"
                />
              </g>
            </svg>
          </div>
          <p
            style={{
              fontFamily: "'Raleway:Medium',sans-serif",
              fontSize: "16px",
              lineHeight: "1.625",
            }}
          >
            Elegante Formal
          </p>
          <div
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              paddingRight: "3rem",
              paddingLeft: "3rem",
              paddingTop: "1rem",
              paddingBottom: "1rem",
              borderRadius: "8px",
              textAlign: "center",
            }}
          >
            <div>
              <p
                style={{
                  fontSize: "14px",
                  fontFamily: "'Raleway:Regular',sans-serif",
                  lineHeight: "1.625",
                }}
              >
                El blanco y los colores claros están reservados
                para la novia. <br></br>
                <br></br>
                ¡Nos encantará verte en otros colores!
              </p>
            </div>
          </div>
          <p
            style={{
              fontSize: "12px",
              fontFamily: "'Raleway:Regular',sans-serif",
              opacity: 0.8,
              marginTop: "1.5rem",
            }}
          >
            ¡Queremos que te sientas cómodo y elegante en
            nuestro día especial!
          </p>
        </div>
        <button
          onClick={() => window.open(URL_PINTEREST, "_blank")}
          style={{
            width: "100%",
            backgroundColor: "#938f38",
            padding: "0.5rem 1.5rem",
            borderRadius: "9999px",
            marginTop: "1.5rem",
            cursor: "pointer",
            textAlign: "center",
            border: "none",
            color: "white",
          }}
        >
          <span
            style={{
              fontFamily: "'Raleway:Bold',sans-serif",
              fontSize: "13px",
            }}
          >
            {"IDEAS PARA INSPIRARTE"}
          </span>
        </button>
      </motion.div>
    </motion.div>
  );

  return createPortal(modalContent, document.body);
}

function FinalPredeterminado({
  className,
  onOpenConfirmarAsistencia,
  onOpenMasInfo1,
  onOpenMasInfo2,
  onOpenDressCode,
  pagaTarjeta,
}: {
  className?: string;
  onOpenConfirmarAsistencia?: () => void;
  onOpenMasInfo1?: () => void;
  onOpenMasInfo2?: () => void;
  onOpenDressCode?: () => void;
  pagaTarjeta: boolean;
}) {
  return (
    <div
      className={
        className ||
        "bg-white h-[5703.545px] relative w-[375.348px]"
      }
      data-name="FINAL/Predeterminado"
    >
      <div
        className="absolute contents left-[-1.74px] top-[1791.24px]"
        data-name="SECCION FECHA Y HORARIO"
      >
        <div
          className="absolute h-[648.517px] left-[-1.74px] top-[1791.24px] w-[375.695px]"
          data-name="FONDO"
        >
          <svg
            className="absolute block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 375.695 648.517"
          >
            <path
              d="M0 0H375.695V648.517H0V0Z"
              fill="var(--fill-0, #938F38)"
              id="FONDO"
            />
          </svg>
        </div>
        <div
          className="absolute h-[178.442px] left-[86.89px] top-[1812.46px] w-[228.978px]"
          data-name="SECCION CALENDARIO"
        >
          <svg
            className="absolute block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 228.978 178.442"
          >
            <g id="SECCION CALENDARIO">
              <path
                d={svgPaths.p19f3a900}
                fill="var(--fill-0, #C4C295)"
                id="Vector 12 (Stroke)"
              />
              <path
                d={svgPaths.p293eb400}
                fill="var(--fill-0, #C4C295)"
                id="Vector 13 (Stroke)"
              />
              <g id="Event date">
                <path
                  d={svgPaths.p270add00}
                  fill="var(--fill-0, white)"
                  id="Vector"
                />
                <path
                  d={svgPaths.p1b599f80}
                  fill="var(--fill-0, white)"
                  id="Vector_2"
                />
                <path
                  d={svgPaths.p2e2d6980}
                  fill="var(--fill-0, white)"
                  id="Vector_3"
                />
                <path
                  d={svgPaths.pccdd300}
                  fill="var(--fill-0, white)"
                  id="Vector_4"
                />
                <path
                  d={svgPaths.p2fd88100}
                  fill="var(--fill-0, white)"
                  id="Vector_5"
                />
                <path
                  d={svgPaths.p3deb7600}
                  fill="var(--fill-0, white)"
                  id="Vector_6"
                />
                <path
                  d={svgPaths.p25743b00}
                  fill="var(--fill-0, white)"
                  id="Vector_7"
                />
                <path
                  d={svgPaths.p14a53280}
                  fill="var(--fill-0, white)"
                  id="Vector_8"
                />
              </g>
              <g id="Vector_9">
                <path d={svgPaths.p1a10c80} fill="white" />
                <path d={svgPaths.pab38a00} fill="white" />
                <path d={svgPaths.p33731d00} fill="white" />
                <path d={svgPaths.pa2c5f00} fill="white" />
                <path d={svgPaths.p4678880} fill="white" />
                <path d={svgPaths.p1c489f00} fill="white" />
                <path d={svgPaths.pce73570} fill="white" />
                <path d={svgPaths.p1d781300} fill="white" />
                <path d={svgPaths.p3dd82280} fill="white" />
                <path d={svgPaths.p15735d40} fill="white" />
                <path d={svgPaths.p2b8cea00} fill="white" />
                <path d={svgPaths.p20f7e700} fill="white" />
                <path d={svgPaths.p24c8fc00} fill="white" />
                <path d={svgPaths.p167514c0} fill="white" />
                <path d={svgPaths.pdee9e00} fill="white" />
                <path d={svgPaths.p3ae001c0} fill="white" />
                <path d={svgPaths.p35ce1900} fill="white" />
                <path d={svgPaths.p10c25500} fill="white" />
                <path d={svgPaths.p2dae5480} fill="white" />
                <path d={svgPaths.p351f6180} fill="white" />
                <path d={svgPaths.p84aeb00} fill="white" />
                <path d={svgPaths.p7cb1b00} fill="white" />
                <path d={svgPaths.pad86d00} fill="white" />
                <path d={svgPaths.p33a4fc0} fill="white" />
                <path d={svgPaths.p38ed000} fill="white" />
                <path d={svgPaths.p10c80d00} fill="white" />
                <path d={svgPaths.p21da9e80} fill="white" />
                <path d={svgPaths.p37fcdb00} fill="white" />
                <path d={svgPaths.pbfb1a00} fill="white" />
                <path d={svgPaths.pc628d0} fill="white" />
                <path d={svgPaths.p2e4e2000} fill="white" />
                <path d={svgPaths.pc67200} fill="white" />
                <path d={svgPaths.pdf3c970} fill="white" />
                <path d={svgPaths.p213f5f80} fill="white" />
                <path d={svgPaths.p36771c00} fill="white" />
                <path d={svgPaths.p2a52d900} fill="white" />
                <path d={svgPaths.p235c7080} fill="white" />
                <path d={svgPaths.p26674e80} fill="white" />
                <path d={svgPaths.pb0b9700} fill="white" />
                <path d={svgPaths.pef07d00} fill="white" />
                <path d={svgPaths.p12bd7500} fill="white" />
                <path d={svgPaths.p1beab900} fill="white" />
                <path d={svgPaths.pee9bd00} fill="white" />
                <path d={svgPaths.p1b9e21c0} fill="white" />
                <path d={svgPaths.p306b2a70} fill="white" />
                <path d={svgPaths.p271df00} fill="white" />
                <path d={svgPaths.p21748780} fill="white" />
                <path d={svgPaths.p3911d260} fill="white" />
                <path d={svgPaths.p2b08300} fill="white" />
                <path d={svgPaths.pd5fc00} fill="white" />
                <path d={svgPaths.p11ff3100} fill="white" />
                <path d={svgPaths.p31052e00} fill="white" />
                <path d={svgPaths.p17bbc080} fill="white" />
                <path d={svgPaths.p25339ef0} fill="white" />
                <path d={svgPaths.p1f35bc80} fill="white" />
                <path d={svgPaths.p3cbd7100} fill="white" />
                <path d={svgPaths.p28471c80} fill="white" />
                <path d={svgPaths.p3ad38c80} fill="white" />
                <path d={svgPaths.p1da79c80} fill="white" />
                <path d={svgPaths.p254b7900} fill="white" />
                <path d={svgPaths.p22b62c80} fill="white" />
                <path
                  d={svgPaths.p3ee94b00}
                  fill="var(--fill-0, #2C3C1A)"
                />
              </g>
            </g>
          </svg>
        </div>
        <div
          className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[22.59px] items-center left-[calc(50%-1.7px)] top-[2265.99px] w-[161.956px]"
          data-name="SECCION CIVIL Y FIESTA"
        >
          <div
            className="content-stretch flex flex-col gap-[10.426px] items-center relative shrink-0 w-full"
            data-name="CIVIL Y FIESTA"
          >
            <div
              className="h-[19.456px] relative shrink-0 w-[160.533px]"
              data-name="Section title"
            >
              <svg
                className="absolute block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 160.534 19.4563"
              >
                <g id="Section title">
                  <path
                    d={svgPaths.p20ec4b80}
                    fill="var(--fill-0, white)"
                    id="Vector"
                  />
                  <path
                    d={svgPaths.p39825f80}
                    fill="var(--fill-0, white)"
                    id="Vector_2"
                  />
                  <path
                    d={svgPaths.p23134f80}
                    fill="var(--fill-0, white)"
                    id="Vector_3"
                  />
                  <path
                    d={svgPaths.p37cf0d40}
                    fill="var(--fill-0, white)"
                    id="Vector_4"
                  />
                  <path
                    d={svgPaths.p32532300}
                    fill="var(--fill-0, white)"
                    id="Vector_5"
                  />
                  <path
                    d={svgPaths.p3ab0ce80}
                    fill="var(--fill-0, white)"
                    id="Vector_6"
                  />
                  <path
                    d={svgPaths.p3234bd00}
                    fill="var(--fill-0, white)"
                    id="Vector_7"
                  />
                  <path
                    d={svgPaths.p23dfb400}
                    fill="var(--fill-0, white)"
                    id="Vector_8"
                  />
                  <path
                    d={svgPaths.pc985100}
                    fill="var(--fill-0, white)"
                    id="Vector_9"
                  />
                  <path
                    d={svgPaths.p279fd4c0}
                    fill="var(--fill-0, white)"
                    id="Vector_10"
                  />
                  <path
                    d={svgPaths.p3c556e00}
                    fill="var(--fill-0, white)"
                    id="Vector_11"
                  />
                  <path
                    d={svgPaths.p26878e00}
                    fill="var(--fill-0, white)"
                    id="Vector_12"
                  />
                </g>
              </svg>
            </div>
            <div
              className="h-[9.773px] relative shrink-0 w-[149.94px]"
              data-name="Location name"
            >
              <svg
                className="absolute block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 149.94 9.77298"
              >
                <g id="Location name">
                  <path
                    d={svgPaths.p376b80f0}
                    fill="var(--fill-0, white)"
                    id="Vector"
                  />
                  <path
                    d={svgPaths.p2b4c8e80}
                    fill="var(--fill-0, white)"
                    id="Vector_2"
                  />
                  <path
                    d={svgPaths.p2873b080}
                    fill="var(--fill-0, white)"
                    id="Vector_3"
                  />
                  <path
                    d={svgPaths.p8784f00}
                    fill="var(--fill-0, white)"
                    id="Vector_4"
                  />
                  <path
                    d={svgPaths.p24aec700}
                    fill="var(--fill-0, white)"
                    id="Vector_5"
                  />
                  <path
                    d={svgPaths.p2b79f300}
                    fill="var(--fill-0, white)"
                    id="Vector_6"
                  />
                  <path
                    d={svgPaths.p2da94b00}
                    fill="var(--fill-0, white)"
                    id="Vector_7"
                  />
                  <path
                    d={svgPaths.p6cbca00}
                    fill="var(--fill-0, white)"
                    id="Vector_8"
                  />
                  <path
                    d={svgPaths.p171e100}
                    fill="var(--fill-0, white)"
                    id="Vector_9"
                  />
                  <path
                    d={svgPaths.p32a57500}
                    fill="var(--fill-0, white)"
                    id="Vector_10"
                  />
                  <path
                    d={svgPaths.p22923500}
                    fill="var(--fill-0, white)"
                    id="Vector_11"
                  />
                  <path
                    d={svgPaths.p25c04180}
                    fill="var(--fill-0, white)"
                    id="Vector_12"
                  />
                  <path
                    d={svgPaths.p39876600}
                    fill="var(--fill-0, white)"
                    id="Vector_13"
                  />
                  <path
                    d={svgPaths.p22472250}
                    fill="var(--fill-0, white)"
                    id="Vector_14"
                  />
                  <path
                    d={svgPaths.p3c22e300}
                    fill="var(--fill-0, white)"
                    id="Vector_15"
                  />
                  <path
                    d={svgPaths.p313ed900}
                    fill="var(--fill-0, white)"
                    id="Vector_16"
                  />
                  <path
                    d={svgPaths.p11d63600}
                    fill="var(--fill-0, white)"
                    id="Vector_17"
                  />
                  <path
                    d={svgPaths.p1be2ff80}
                    fill="var(--fill-0, white)"
                    id="Vector_18"
                  />
                  <path
                    d={svgPaths.p1058dc0}
                    fill="var(--fill-0, white)"
                    id="Vector_19"
                  />
                  <path
                    d={svgPaths.p82d500}
                    fill="var(--fill-0, white)"
                    id="Vector_20"
                  />
                  <path
                    d={svgPaths.p94e0e00}
                    fill="var(--fill-0, white)"
                    id="Vector_21"
                  />
                </g>
              </svg>
            </div>
          </div>
          <StyledButton
            variant="secondary"
            className="content-stretch flex items-center justify-center"
            data-name="BOTON COMO LLEGAR"
            href={URL_COMO_LLEGAR_FIESTA}
          >
            <div
              className="h-[11.523px] relative shrink-0 w-[88.373px]"
              data-name="Button text"
            >
              <svg
                className="absolute block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 88.3729 11.5232"
              >
                <g id="Button text">
                  <path
                    d={svgPaths.p14cc2400}
                    fill="var(--fill-0, white)"
                    id="Vector"
                  />
                  <path
                    d={svgPaths.p3331e900}
                    fill="var(--fill-0, white)"
                    id="Vector_2"
                  />
                  <path
                    d={svgPaths.p379e4b00}
                    fill="var(--fill-0, white)"
                    id="Vector_3"
                  />
                  <path
                    d={svgPaths.p27588600}
                    fill="var(--fill-0, white)"
                    id="Vector_4"
                  />
                  <path
                    d={svgPaths.p3eabf500}
                    fill="var(--fill-0, white)"
                    id="Vector_5"
                  />
                  <path
                    d={svgPaths.p1ed8d3c0}
                    fill="var(--fill-0, white)"
                    id="Vector_6"
                  />
                  <path
                    d={svgPaths.p25119a80}
                    fill="var(--fill-0, white)"
                    id="Vector_7"
                  />
                  <path
                    d={svgPaths.p34ac9340}
                    fill="var(--fill-0, white)"
                    id="Vector_8"
                  />
                  <path
                    d={svgPaths.p2af7e980}
                    fill="var(--fill-0, white)"
                    id="Vector_9"
                  />
                  <path
                    d={svgPaths.p24384670}
                    fill="var(--fill-0, white)"
                    id="Vector_10"
                  />
                </g>
              </svg>
            </div>
          </StyledButton>
        </div>
        <div
          className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[12.164px] items-center left-[calc(50%-2.03px)] top-[2042.17px] w-[129.286px]"
          data-name="CEREMONIA"
        >
          <div
            className="h-[19.551px] relative shrink-0 w-[127.593px]"
            data-name="Section title"
          >
            <svg
              className="absolute block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 127.593 19.5515"
            >
              <g id="Section title">
                <path
                  d={svgPaths.p10ab1f80}
                  fill="var(--fill-0, white)"
                  id="Vector"
                />
                <path
                  d={svgPaths.p17560300}
                  fill="var(--fill-0, white)"
                  id="Vector_2"
                />
                <path
                  d={svgPaths.p33d50f00}
                  fill="var(--fill-0, white)"
                  id="Vector_3"
                />
                <path
                  d={svgPaths.pe0d9600}
                  fill="var(--fill-0, white)"
                  id="Vector_4"
                />
                <path
                  d={svgPaths.p2a832d00}
                  fill="var(--fill-0, white)"
                  id="Vector_5"
                />
                <path
                  d={svgPaths.p23d97680}
                  fill="var(--fill-0, white)"
                  id="Vector_6"
                />
                <path
                  d={svgPaths.p105a6a00}
                  fill="var(--fill-0, white)"
                  id="Vector_7"
                />
                <path
                  d={svgPaths.p7571700}
                  fill="var(--fill-0, white)"
                  id="Vector_8"
                />
                <path
                  d={svgPaths.p26878e00}
                  fill="var(--fill-0, white)"
                  id="Vector_9"
                />
              </g>
            </svg>
          </div>
          <div
            className="h-auto relative shrink-0 w-[110px]"
            data-name="Event time"
            style={{ paddingTop: "1px" }}
          >
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 79.3384 21.1134"
            >
              <g id="Event time">
                <path
                  d={svgPaths.pf162480}
                  fill="var(--fill-0, white)"
                  id="Vector"
                />
                <path
                  d={svgPaths.p5de270}
                  fill="var(--fill-0, white)"
                  id="Vector_2"
                />
                <path
                  d={svgPaths.p3e5cd080}
                  fill="var(--fill-0, white)"
                  id="Vector_3"
                />
                <path
                  d={svgPaths.p19ec2600}
                  fill="var(--fill-0, white)"
                  id="Vector_4"
                />
                <path
                  d={svgPaths.p18973200}
                  fill="var(--fill-0, white)"
                  id="Vector_5"
                />
                <path
                  d={svgPaths.p1f3a5f00}
                  fill="var(--fill-0, white)"
                  id="Vector_6"
                />
                <path
                  d={svgPaths.p1800ec00}
                  fill="var(--fill-0, white)"
                  id="Vector_7"
                />
              </g>
            </svg>
          </div>
        </div>
        <StyledButton
          variant="secondary"
          className="-translate-x-1/2 absolute left-[calc(50%-1.75px)] top-[2188.83px] z-10"
          data-name="BOTON COMO LLEGAR"
          href={URL_COMO_LLEGAR_CEREMONIA}
        >
          <div
            className="h-[11.523px] relative shrink-0 w-[88.373px]"
            data-name="Button text"
          >
            <svg
              className="absolute block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 88.3731 11.5232"
            >
              <g id="Button text">
                <path
                  d={svgPaths.pbf77300}
                  fill="var(--fill-0, white)"
                  id="Vector"
                />
                <path
                  d={svgPaths.p1a7fd180}
                  fill="var(--fill-0, white)"
                  id="Vector_2"
                />
                <path
                  d={svgPaths.p9cb300}
                  fill="var(--fill-0, white)"
                  id="Vector_3"
                />
                <path
                  d={svgPaths.p1e213600}
                  fill="var(--fill-0, white)"
                  id="Vector_4"
                />
                <path
                  d={svgPaths.p1663be00}
                  fill="var(--fill-0, white)"
                  id="Vector_5"
                />
                <path
                  d={svgPaths.p33e6b600}
                  fill="var(--fill-0, white)"
                  id="Vector_6"
                />
                <path
                  d={svgPaths.p2e394d00}
                  fill="var(--fill-0, white)"
                  id="Vector_7"
                />
                <path
                  d={svgPaths.p20f46f00}
                  fill="var(--fill-0, white)"
                  id="Vector_8"
                />
                <path
                  d={svgPaths.pd3d5ff0}
                  fill="var(--fill-0, white)"
                  id="Vector_9"
                />
                <path
                  d={svgPaths.p2e583d80}
                  fill="var(--fill-0, white)"
                  id="Vector_10"
                />
              </g>
            </svg>
          </div>
        </StyledButton>
        <div
          className="-translate-x-1/2 absolute h-[12.782px] left-[calc(50%+33.67px)] top-[2138.42px] w-[216.557px] pointer-events-none"
          data-name="Location name"
        >
          <svg
            className="absolute block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 216.557 12.7817"
          >
            <g id="Location name">
              <path
                d={svgPaths.p3ccbdf80}
                fill="var(--fill-0, white)"
                id="Vector"
              />
              <path
                d={svgPaths.p2663f700}
                fill="var(--fill-0, white)"
                id="Vector_2"
              />
              <path
                d={svgPaths.p2aa27ef0}
                fill="var(--fill-0, white)"
                id="Vector_3"
              />
              <path
                d={svgPaths.p21fa2700}
                fill="var(--fill-0, white)"
                id="Vector_4"
              />
              <path
                d={svgPaths.p317e9600}
                fill="var(--fill-0, white)"
                id="Vector_5"
              />
              <path
                d={svgPaths.p2dadadf0}
                fill="var(--fill-0, white)"
                id="Vector_6"
              />
              <path
                d={svgPaths.p2d8a300}
                fill="var(--fill-0, white)"
                id="Vector_7"
              />
              <path
                d={svgPaths.p18022100}
                fill="var(--fill-0, white)"
                id="Vector_8"
              />
              <path
                d={svgPaths.p3d163000}
                fill="var(--fill-0, white)"
                id="Vector_9"
              />
              <path
                d={svgPaths.p1fc8d100}
                fill="var(--fill-0, white)"
                id="Vector_10"
              />
              <path
                d={svgPaths.p64ea700}
                fill="var(--fill-0, white)"
                id="Vector_11"
              />
              <path
                d={svgPaths.p39318f80}
                fill="var(--fill-0, white)"
                id="Vector_12"
              />
              <path
                d={svgPaths.pfadb000}
                fill="var(--fill-0, white)"
                id="Vector_13"
              />
              <path
                d={svgPaths.p31b1b040}
                fill="var(--fill-0, white)"
                id="Vector_14"
              />
              <path
                d={svgPaths.p385fe800}
                fill="var(--fill-0, white)"
                id="Vector_15"
              />
              <path
                d={svgPaths.pa13a880}
                fill="var(--fill-0, white)"
                id="Vector_16"
              />
              <path
                d={svgPaths.p2d6ac200}
                fill="var(--fill-0, white)"
                id="Vector_17"
              />
              <path
                d={svgPaths.pffedc00}
                fill="var(--fill-0, white)"
                id="Vector_18"
              />
              <path
                d={svgPaths.p90c9480}
                fill="var(--fill-0, white)"
                id="Vector_19"
              />
              <path
                d={svgPaths.p2d5ef340}
                fill="var(--fill-0, white)"
                id="Vector_20"
              />
              <path
                d={svgPaths.p3e69c500}
                fill="var(--fill-0, white)"
                id="Vector_21"
              />
              <path
                d={svgPaths.p420cc00}
                fill="var(--fill-0, white)"
                id="Vector_22"
              />
              <path
                d={svgPaths.p3ccec800}
                fill="var(--fill-0, white)"
                id="Vector_23"
              />
              <path
                d={svgPaths.p1ac6a100}
                fill="var(--fill-0, white)"
                id="Vector_24"
              />
              <path
                d={svgPaths.p9431780}
                fill="var(--fill-0, white)"
                id="Vector_25"
              />
              <path
                d={svgPaths.pfa94880}
                fill="var(--fill-0, white)"
                id="Vector_26"
              />
              <path
                d={svgPaths.p2fe0cf80}
                fill="var(--fill-0, white)"
                id="Vector_27"
              />
              <path
                d={svgPaths.p279ced00}
                fill="var(--fill-0, white)"
                id="Vector_28"
              />
              <path
                d={svgPaths.p36a7b00}
                fill="var(--fill-0, white)"
                id="Vector_29"
              />
            </g>
          </svg>
        </div>
        <div
          className="absolute inset-[36.66%_71.7%_61.92%_8.24%] pointer-events-none"
          data-name="PARROQUIA ICONO"
        >
          <svg
            className="absolute block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 75.3037 81.3253"
          >
            <g id="PARROQUIA ICONO">
              <g id="Vector">
                <path
                  d={svgPaths.p36680d00}
                  fill="var(--fill-0, white)"
                />
                <path
                  d={svgPaths.p2fb06080}
                  fill="var(--fill-0, white)"
                />
                <path
                  d={svgPaths.p1bafa080}
                  fill="var(--fill-0, white)"
                />
                <path
                  d={svgPaths.p22b53180}
                  fill="var(--fill-0, white)"
                />
                <path
                  d={svgPaths.p34f68520}
                  fill="var(--fill-0, white)"
                />
                <path
                  d={svgPaths.p38b01720}
                  fill="var(--fill-0, white)"
                />
                <path
                  d={svgPaths.p2463b400}
                  fill="var(--fill-0, white)"
                />
              </g>
            </g>
          </svg>
        </div>
        <div className="absolute flex inset-[40.16%_7.47%_58.15%_71.57%] items-center justify-center pointer-events-none">
          <div className="flex-none h-[89.514px] rotate-[6.36deg] w-[69.2px]">
            <div
              className="relative size-full"
              data-name="COPAS ICONO"
            >
              <svg
                className="absolute block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 69.1998 89.5142"
              >
                <g id="COPAS ICONO">
                  <g id="Vector">
                    <path
                      d={svgPaths.p304eb480}
                      fill="var(--fill-0, white)"
                    />
                    <path
                      d={svgPaths.p19142200}
                      fill="var(--fill-0, white)"
                    />
                    <path
                      d={svgPaths.p39edcb00}
                      fill="var(--fill-0, white)"
                    />
                    <path
                      d={svgPaths.p3d5c0580}
                      fill="var(--fill-0, white)"
                    />
                    <path
                      d={svgPaths.p34fd7e80}
                      fill="var(--fill-0, white)"
                    />
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div
          className="absolute h-[109.948px] left-[70.38px] top-[2178.41px] w-[237.357px] pointer-events-none"
          data-name="LINEA"
        >
          <svg
            className="absolute block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 237.357 109.948"
          >
            <path
              d={svgPaths.p5146500}
              fill="var(--fill-0, white)"
              id="LINEA"
            />
          </svg>
        </div>
        <div
          className="absolute h-[26.577px] left-[217.67px] top-[1972.73px] w-[98.222px]"
          data-name="Agendá la fecha"
        >
          <svg
            className="absolute block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 98.2216 26.5772"
          >
            <g id="AgendÃ¡ la fecha">
              <path
                d={svgPaths.pa96a380}
                fill="var(--fill-0, white)"
                id="Vector"
              />
              <path
                d={svgPaths.p24bb1b00}
                fill="var(--fill-0, white)"
                id="Vector_2"
              />
              <path
                d={svgPaths.p2570bc00}
                fill="var(--fill-0, white)"
                id="Vector_3"
              />
              <path
                d={svgPaths.p14b84100}
                fill="var(--fill-0, white)"
                id="Vector_4"
              />
              <path
                d={svgPaths.p21ab8300}
                fill="var(--fill-0, white)"
                id="Vector_5"
              />
              <path
                d={svgPaths.p17e1af80}
                fill="var(--fill-0, white)"
                id="Vector_6"
              />
              <path
                d={svgPaths.p919c100}
                fill="var(--fill-0, white)"
                id="Vector_7"
              />
              <path
                d={svgPaths.p23a51e00}
                fill="var(--fill-0, white)"
                id="Vector_8"
              />
              <path
                d={svgPaths.p128ead80}
                fill="var(--fill-0, white)"
                id="Vector_9"
              />
              <path
                d={svgPaths.p19682900}
                fill="var(--fill-0, white)"
                id="Vector_10"
              />
              <path
                d={svgPaths.p12dd9d00}
                fill="var(--fill-0, white)"
                id="Vector_11"
              />
              <path
                d={svgPaths.p232dce00}
                fill="var(--fill-0, white)"
                id="Vector_12"
              />
              <path
                d={svgPaths.pec61e00}
                fill="var(--fill-0, white)"
                id="Vector_13"
              />
            </g>
          </svg>
        </div>
      </div>
      <div
        className="absolute contents left-[-1.74px] top-[2439.76px]"
        data-name="SECCION DRESS CODE"
      >
        <div
          className="absolute h-[291.242px] left-[-1.74px] opacity-50 top-[2439.76px] w-[376.738px]"
          data-name="TEXTURA PAPEL"
        >
          <img
            alt=""
            className="absolute block max-w-none size-full"
            height="291.242"
            src={imgTexturaPapel}
            width="376.738"
          />
        </div>
        <div
          className="absolute content-stretch flex flex-col gap-[22.59px] items-center left-[47.27px] top-[2490.15px] w-[280.468px]"
          data-name="TEXTO"
        >
          <div
            className="h-[19.551px] relative shrink-0 w-[135.952px]"
            data-name="Section title"
          >
            <svg
              className="absolute block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 135.952 19.5515"
            >
              <g id="Section title">
                <path
                  d={svgPaths.p16c3d300}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector"
                />
                <path
                  d={svgPaths.p9d4d80}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_2"
                />
                <path
                  d={svgPaths.p3c800700}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_3"
                />
                <path
                  d={svgPaths.p3219780}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_4"
                />
                <path
                  d={svgPaths.p184e9800}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_5"
                />
                <path
                  d={svgPaths.p3596a800}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_6"
                />
                <path
                  d={svgPaths.p35085880}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_7"
                />
                <path
                  d={svgPaths.p3b3430}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_8"
                />
                <path
                  d={svgPaths.pd185100}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_9"
                />
              </g>
            </svg>
          </div>
          <div
            className="h-[65.001px] relative shrink-0 w-[266.873px]"
            data-name="Section description"
          >
            <svg
              className="absolute block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 266.873 65.0015"
            >
              <g id="Section description">
                <path
                  d={svgPaths.p3c8e4400}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector"
                />
                <path
                  d={svgPaths.p152c9980}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_2"
                />
                <path
                  d={svgPaths.p24950d80}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_3"
                />
                <path
                  d={svgPaths.pbd06a70}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_4"
                />
                <path
                  d={svgPaths.p2c034280}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_5"
                />
                <path
                  d={svgPaths.p22352200}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_6"
                />
                <path
                  d={svgPaths.p33398c00}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_7"
                />
                <path
                  d={svgPaths.p9a44480}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_8"
                />
                <path
                  d={svgPaths.p129d6a00}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_9"
                />
                <path
                  d={svgPaths.pd8f7000}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_10"
                />
                <path
                  d={svgPaths.p20defcb2}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_11"
                />
                <path
                  d={svgPaths.p3f367900}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_12"
                />
                <path
                  d={svgPaths.p3658ef00}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_13"
                />
                <path
                  d={svgPaths.p32c17480}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_14"
                />
                <path
                  d={svgPaths.p30d61b40}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_15"
                />
                <path
                  d={svgPaths.p2cc76480}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_16"
                />
                <path
                  d={svgPaths.p38911500}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_17"
                />
                <path
                  d={svgPaths.p193535f0}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_18"
                />
                <path
                  d={svgPaths.p38de8f80}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_19"
                />
                <path
                  d={svgPaths.p3b08c300}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_20"
                />
                <path
                  d={svgPaths.p26499300}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_21"
                />
                <path
                  d={svgPaths.p2a14b00}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_22"
                />
                <path
                  d={svgPaths.p36c86400}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_23"
                />
                <path
                  d={svgPaths.p18317900}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_24"
                />
                <path
                  d={svgPaths.p34b300}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_25"
                />
                <path
                  d={svgPaths.p224bc680}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_26"
                />
                <path
                  d={svgPaths.p1915ea80}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_27"
                />
                <path
                  d={svgPaths.pa479780}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_28"
                />
                <path
                  d={svgPaths.p337d5600}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_29"
                />
                <path
                  d={svgPaths.p1778e980}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_30"
                />
                <path
                  d={svgPaths.p2090df20}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_31"
                />
                <path
                  d={svgPaths.p1ec1ca00}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_32"
                />
                <path
                  d={svgPaths.p23a2bd80}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_33"
                />
                <path
                  d={svgPaths.p1320f600}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_34"
                />
                <path
                  d={svgPaths.p3a402600}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_35"
                />
                <path
                  d={svgPaths.p39df1b80}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_36"
                />
                <path
                  d={svgPaths.p1a7885a0}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_37"
                />
                <path
                  d={svgPaths.p2a3a5900}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_38"
                />
                <path
                  d={svgPaths.p33c5cd00}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_39"
                />
                <path
                  d={svgPaths.p7e44780}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_40"
                />
                <path
                  d={svgPaths.p3461200}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_41"
                />
                <path
                  d={svgPaths.p12462180}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_42"
                />
                <path
                  d={svgPaths.pad9a680}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_43"
                />
                <path
                  d={svgPaths.p3af45500}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_44"
                />
                <path
                  d={svgPaths.p3ca6f900}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_45"
                />
                <path
                  d={svgPaths.p33cf6800}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_46"
                />
                <path
                  d={svgPaths.p2cf27e00}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_47"
                />
                <path
                  d={svgPaths.p897980}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_48"
                />
                <path
                  d={svgPaths.p12f2e600}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_49"
                />
                <path
                  d={svgPaths.p339f6400}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_50"
                />
                <path
                  d={svgPaths.p32bc8c00}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_51"
                />
                <path
                  d={svgPaths.p23911b00}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_52"
                />
                <path
                  d={svgPaths.p3e660680}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_53"
                />
                <path
                  d={svgPaths.p20448670}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_54"
                />
                <path
                  d={svgPaths.p13af1200}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_55"
                />
                <path
                  d={svgPaths.p252f7d80}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_56"
                />
                <path
                  d={svgPaths.p31a62900}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_57"
                />
                <path
                  d={svgPaths.p2d13f580}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_58"
                />
                <path
                  d={svgPaths.p26db6100}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_59"
                />
                <path
                  d={svgPaths.p2fbc8b00}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_60"
                />
                <path
                  d={svgPaths.p3dd40a00}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_61"
                />
                <path
                  d={svgPaths.p4f24672}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_62"
                />
                <path
                  d={svgPaths.p3471da80}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_63"
                />
                <path
                  d={svgPaths.p3b378b00}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_64"
                />
                <path
                  d={svgPaths.p29971600}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_65"
                />
                <path
                  d={svgPaths.p13b94880}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_66"
                />
                <path
                  d={svgPaths.p2d2b5800}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_67"
                />
                <path
                  d={svgPaths.p212f3e00}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_68"
                />
                <path
                  d={svgPaths.p2d4d9900}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_69"
                />
                <path
                  d={svgPaths.p10a5c700}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_70"
                />
                <path
                  d={svgPaths.pf625f80}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_71"
                />
                <path
                  d={svgPaths.p2edd3080}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_72"
                />
                <path
                  d={svgPaths.p1cdec000}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_73"
                />
                <path
                  d={svgPaths.p6e63400}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_74"
                />
                <path
                  d={svgPaths.pad9dc80}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_75"
                />
                <path
                  d={svgPaths.p33db9a80}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_76"
                />
                <path
                  d={svgPaths.p21804800}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_77"
                />
                <path
                  d={svgPaths.p3ccd0700}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_78"
                />
                <path
                  d={svgPaths.p28054b00}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_79"
                />
                <path
                  d={svgPaths.p27ca7900}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_80"
                />
                <path
                  d={svgPaths.p2b94c600}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_81"
                />
                <path
                  d={svgPaths.p36a60580}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_82"
                />
                <path
                  d={svgPaths.p165e3b40}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_83"
                />
                <path
                  d={svgPaths.p16455e80}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_84"
                />
                <path
                  d={svgPaths.p3b38cd00}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_85"
                />
                <path
                  d={svgPaths.pc6ee00}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_86"
                />
                <path
                  d={svgPaths.p2ba0e400}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_87"
                />
                <path
                  d={svgPaths.p21df4480}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_88"
                />
                <path
                  d={svgPaths.p399b3000}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_89"
                />
                <path
                  d={svgPaths.pa409a40}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_90"
                />
                <path
                  d={svgPaths.p3ea6f5a0}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_91"
                />
                <path
                  d={svgPaths.p2d721770}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_92"
                />
                <path
                  d={svgPaths.p34701af0}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_93"
                />
                <path
                  d={svgPaths.pab87c00}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_94"
                />
                <path
                  d={svgPaths.p39b24c00}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_95"
                />
                <path
                  d={svgPaths.p37ccee00}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_96"
                />
                <path
                  d={svgPaths.pfb76780}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_97"
                />
                <path
                  d={svgPaths.p2b5bcd00}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_98"
                />
                <path
                  d={svgPaths.pa6f4b00}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_99"
                />
                <path
                  d={svgPaths.p199a5d32}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_100"
                />
                <path
                  d={svgPaths.pb695300}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_101"
                />
                <path
                  d={svgPaths.p1f02df00}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_102"
                />
                <path
                  d={svgPaths.p1783e580}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_103"
                />
                <path
                  d={svgPaths.pf081000}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_104"
                />
                <path
                  d={svgPaths.p9943800}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_105"
                />
                <path
                  d={svgPaths.pfb98600}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_106"
                />
                <path
                  d={svgPaths.p3399e280}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_107"
                />
                <path
                  d={svgPaths.p3548500}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_108"
                />
                <path
                  d={svgPaths.p2a98ed00}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_109"
                />
                <path
                  d={svgPaths.p33025d80}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_110"
                />
                <path
                  d={svgPaths.p5454200}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_111"
                />
                <path
                  d={svgPaths.p39be0600}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_112"
                />
                <path
                  d={svgPaths.pe191500}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_113"
                />
                <path
                  d={svgPaths.p182dbf80}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_114"
                />
                <path
                  d={svgPaths.p218db700}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_115"
                />
                <path
                  d={svgPaths.p21b58000}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_116"
                />
                <path
                  d={svgPaths.p1640c280}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_117"
                />
                <path
                  d={svgPaths.p25183b80}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_118"
                />
                <path
                  d={svgPaths.p5a3f400}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_119"
                />
                <path
                  d={svgPaths.pef41a00}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_120"
                />
                <path
                  d={svgPaths.pc434900}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_121"
                />
                <path
                  d={svgPaths.p13eab040}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_122"
                />
                <path
                  d={svgPaths.p4620100}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_123"
                />
                <path
                  d={svgPaths.p254cc480}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_124"
                />
              </g>
            </svg>
          </div>
        </div>
        <div
          className="absolute content-stretch flex gap-[10.079px] items-center left-[82.54px] top-[2642.03px]"
          data-name="ELEGANTE"
        >
          <div
            className="h-[29.208px] relative shrink-0 w-[184.582px]"
            data-name="Dress code"
          >
            <svg
              className="absolute block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 184.582 29.2076"
            >
              <g id="Dress code">
                <path
                  d={svgPaths.p1f310e90}
                  fill="var(--fill-0, #938F38)"
                  id="Vector"
                />
                <path
                  d={svgPaths.p28673780}
                  fill="var(--fill-0, #938F38)"
                  id="Vector_2"
                />
                <path
                  d={svgPaths.pd911d00}
                  fill="var(--fill-0, #938F38)"
                  id="Vector_3"
                />
                <path
                  d={svgPaths.p1d486940}
                  fill="var(--fill-0, #938F38)"
                  id="Vector_4"
                />
                <path
                  d={svgPaths.p27592100}
                  fill="var(--fill-0, #938F38)"
                  id="Vector_5"
                />
                <path
                  d={svgPaths.p3dd52080}
                  fill="var(--fill-0, #938F38)"
                  id="Vector_6"
                />
                <path
                  d={svgPaths.p388b9a80}
                  fill="var(--fill-0, #938F38)"
                  id="Vector_7"
                />
                <path
                  d={svgPaths.p36e1ef00}
                  fill="var(--fill-0, #938F38)"
                  id="Vector_8"
                />
                <path
                  d={svgPaths.p3a356c50}
                  fill="var(--fill-0, #938F38)"
                  id="Vector_9"
                />
                <path
                  d={svgPaths.p1d506880}
                  fill="var(--fill-0, #938F38)"
                  id="Vector_10"
                />
                <path
                  d={svgPaths.p3eae5b00}
                  fill="var(--fill-0, #938F38)"
                  id="Vector_11"
                />
                <path
                  d={svgPaths.p24beee00}
                  fill="var(--fill-0, #938F38)"
                  id="Vector_12"
                />
                <path
                  d={svgPaths.p1b1000c0}
                  fill="var(--fill-0, #938F38)"
                  id="Vector_13"
                />
                <path
                  d={svgPaths.p29826800}
                  fill="var(--fill-0, #938F38)"
                  id="Vector_14"
                />
                <path
                  d={svgPaths.p87e2880}
                  fill="var(--fill-0, #938F38)"
                  id="Vector_15"
                />
              </g>
            </svg>
          </div>
          <button
            className="relative shrink-0 size-[18.072px] cursor-pointer hover:scale-110 transition-transform z-30 bg-transparent border-none p-0"
            data-name="BOTON PREGUNTA"
            onClick={() => {
              console.log(
                "Hice click en el botón de dress code",
              );
              onOpenDressCode?.();
            }}
            type="button"
            aria-label="Información del dress code"
          >
            <svg
              className="absolute block size-full pointer-events-none"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 18.0723 18.0723"
            >
              <g id="BOTON PREGUNTA">
                <path
                  d={svgPaths.p3ed5e340}
                  fill="var(--fill-0, #938F38)"
                  id="Ellipse 1"
                />
                <path
                  d={svgPaths.p2e076600}
                  fill="var(--fill-0, white)"
                  id="Button text"
                />
              </g>
            </svg>
          </button>
        </div>
      </div>
      <div
        className="absolute contents left-[-0.7px] top-[5411.61px]"
        data-name="SECCION INSTAGRAM"
      >
        <div className="absolute flex h-[291.937px] items-center justify-center left-[-0.7px] top-[5411.61px] w-[376.043px]">
          <div className="flex-none rotate-180">
            <div
              className="h-[291.937px] opacity-50 relative w-[376.043px]"
              data-name="TEXTURA PAPEL"
            >
              <img
                alt=""
                className="absolute block max-w-none size-full"
                height="291.937"
                src={imgTexturaPapel1}
                width="376.043"
              />
            </div>
          </div>
        </div>
        <div
          className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[22.59px] items-center left-[calc(50%-0.22px)] top-[5451.92px] w-[274.907px]"
          data-name="SECCION INSTAGRAM"
        >
          <div
            className="h-[47.251px] relative shrink-0 w-[185.287px]"
            data-name="Section title"
          >
            <svg
              className="absolute block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 185.287 47.2513"
            >
              <g id="Section title">
                <path
                  d={svgPaths.pf220580}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector"
                />
                <path
                  d={svgPaths.p16c51e00}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_2"
                />
                <path
                  d={svgPaths.pdb59900}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_3"
                />
                <path
                  d={svgPaths.p5620b00}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_4"
                />
                <path
                  d={svgPaths.p1338dac0}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_5"
                />
                <path
                  d={svgPaths.p709dd80}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_6"
                />
                <path
                  d={svgPaths.p3e2aeb00}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_7"
                />
                <path
                  d={svgPaths.p3bddda00}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_8"
                />
                <path
                  d={svgPaths.p3b0fcb00}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_9"
                />
                <path
                  d={svgPaths.p34fac780}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_10"
                />
                <path
                  d={svgPaths.p3b4b7280}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_11"
                />
                <path
                  d={svgPaths.p30358380}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_12"
                />
                <path
                  d={svgPaths.p1738db00}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_13"
                />
                <path
                  d={svgPaths.pfdf6500}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_14"
                />
                <path
                  d={svgPaths.p3eb7e380}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_15"
                />
                <path
                  d={svgPaths.p1a504b00}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_16"
                />
                <path
                  d={svgPaths.p38767780}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_17"
                />
                <path
                  d={svgPaths.p33e19b80}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_18"
                />
                <path
                  d={svgPaths.p1d71e200}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_19"
                />
                <path
                  d={svgPaths.p361c4600}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_20"
                />
                <path
                  d={svgPaths.p3a300500}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_21"
                />
                <path
                  d={svgPaths.p3c1fd240}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_22"
                />
              </g>
            </svg>
          </div>
          <div
            className="content-stretch flex flex-col gap-[20.853px] items-center relative shrink-0 w-full"
            data-name="Section container"
          >
            <div
              className="h-[25.617px] relative shrink-0 w-[270.299px]"
              data-name="Section description"
            >
              <svg
                className="absolute block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 270.299 25.6168"
              >
                <g id="Section description">
                  <path
                    d={svgPaths.p4e58700}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector"
                  />
                  <path
                    d={svgPaths.pbef6200}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_2"
                  />
                  <path
                    d={svgPaths.p1d82ea00}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_3"
                  />
                  <path
                    d={svgPaths.p12ec0480}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_4"
                  />
                  <path
                    d={svgPaths.p1bfd3d80}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_5"
                  />
                  <path
                    d={svgPaths.pf1ff00}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_6"
                  />
                  <path
                    d={svgPaths.pdc49500}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_7"
                  />
                  <path
                    d={svgPaths.p20f13000}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_8"
                  />
                  <path
                    d={svgPaths.p2e7ef080}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_9"
                  />
                  <path
                    d={svgPaths.p28bdda50}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_10"
                  />
                  <path
                    d={svgPaths.pea22380}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_11"
                  />
                  <path
                    d={svgPaths.p9b0cb00}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_12"
                  />
                  <path
                    d={svgPaths.p32a4fc00}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_13"
                  />
                  <path
                    d={svgPaths.pcd9cd00}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_14"
                  />
                  <path
                    d={svgPaths.p1df1a7c0}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_15"
                  />
                  <path
                    d={svgPaths.p1ce9a80}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_16"
                  />
                  <path
                    d={svgPaths.pfd8a000}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_17"
                  />
                  <path
                    d={svgPaths.p3b857400}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_18"
                  />
                  <path
                    d={svgPaths.p11be1c00}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_19"
                  />
                  <path
                    d={svgPaths.p356bcd00}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_20"
                  />
                  <path
                    d={svgPaths.p28705c00}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_21"
                  />
                  <path
                    d={svgPaths.p33dfcb00}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_22"
                  />
                  <path
                    d={svgPaths.p113d6c00}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_23"
                  />
                  <path
                    d={svgPaths.p39c38180}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_24"
                  />
                  <path
                    d={svgPaths.p13937d80}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_25"
                  />
                  <path
                    d={svgPaths.p36f95be0}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_26"
                  />
                  <path
                    d={svgPaths.p3a20dfe0}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_27"
                  />
                  <path
                    d={svgPaths.p13034c00}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_28"
                  />
                  <path
                    d={svgPaths.p213c0080}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_29"
                  />
                  <path
                    d={svgPaths.p3de92cc0}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_30"
                  />
                  <path
                    d={svgPaths.pbc88000}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_31"
                  />
                  <path
                    d={svgPaths.p25844200}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_32"
                  />
                  <path
                    d={svgPaths.p17f19d00}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_33"
                  />
                  <path
                    d={svgPaths.p148bb600}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_34"
                  />
                  <path
                    d={svgPaths.p19177800}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_35"
                  />
                  <path
                    d={svgPaths.p7513d80}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_36"
                  />
                  <path
                    d={svgPaths.p28019e00}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_37"
                  />
                  <path
                    d={svgPaths.p2ee81f00}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_38"
                  />
                  <path
                    d={svgPaths.p14ee3500}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_39"
                  />
                  <path
                    d={svgPaths.p7cee880}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_40"
                  />
                  <path
                    d={svgPaths.p20c96580}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_41"
                  />
                  <path
                    d={svgPaths.p32204e80}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_42"
                  />
                  <path
                    d={svgPaths.p11d1100}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_43"
                  />
                  <path
                    d={svgPaths.p3a1005f0}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_44"
                  />
                  <path
                    d={svgPaths.p3db20540}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_45"
                  />
                  <path
                    d={svgPaths.p108a8970}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_46"
                  />
                  <path
                    d={svgPaths.p1b16680}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_47"
                  />
                  <path
                    d={svgPaths.p1e0e2600}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_48"
                  />
                  <path
                    d={svgPaths.p2a0f9700}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_49"
                  />
                  <path
                    d={svgPaths.p161cfcc0}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_50"
                  />
                  <path
                    d={svgPaths.p6c09780}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_51"
                  />
                  <path
                    d={svgPaths.p6f75b00}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_52"
                  />
                  <path
                    d={svgPaths.pe597800}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_53"
                  />
                  <path
                    d={svgPaths.p2fd1d180}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_54"
                  />
                  <path
                    d={svgPaths.pe523cc0}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_55"
                  />
                  <path
                    d={svgPaths.pf36f400}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_56"
                  />
                  <path
                    d={svgPaths.p28036100}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_57"
                  />
                  <path
                    d={svgPaths.pa25dd00}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_58"
                  />
                  <path
                    d={svgPaths.p102b9a80}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_59"
                  />
                  <path
                    d={svgPaths.pc701800}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_60"
                  />
                  <path
                    d={svgPaths.p4c40d00}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_61"
                  />
                  <path
                    d={svgPaths.p3833d880}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_62"
                  />
                  <path
                    d={svgPaths.p1f7bb880}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_63"
                  />
                  <path
                    d={svgPaths.p27eaef0}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_64"
                  />
                  <path
                    d={svgPaths.p14c48700}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_65"
                  />
                  <path
                    d={svgPaths.p2c8b9480}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_66"
                  />
                  <path
                    d={svgPaths.p3622cc00}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_67"
                  />
                  <path
                    d={svgPaths.p19ca6400}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_68"
                  />
                  <path
                    d={svgPaths.p20e91d80}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_69"
                  />
                  <path
                    d={svgPaths.p2dd5a800}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_70"
                  />
                  <path
                    d={svgPaths.p16554c00}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_71"
                  />
                  <path
                    d={svgPaths.p267a8000}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_72"
                  />
                  <path
                    d={svgPaths.p1ebb1600}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_73"
                  />
                  <path
                    d={svgPaths.p3dac300}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_74"
                  />
                  <path
                    d={svgPaths.p2a312300}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_75"
                  />
                  <path
                    d={svgPaths.p28416cc0}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_76"
                  />
                </g>
              </svg>
            </div>
            <div
              className="h-[11.665px] relative shrink-0 w-[128.927px]"
              data-name="Instagram handle"
            >
              <svg
                className="absolute block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 128.927 11.6655"
              >
                <g id="Instagram handle">
                  <path
                    d={svgPaths.p22ffda00}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector"
                  />
                  <path
                    d={svgPaths.p1060ab00}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_2"
                  />
                  <path
                    d={svgPaths.p3f8bca00}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_3"
                  />
                  <path
                    d={svgPaths.p11a00800}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_4"
                  />
                  <path
                    d={svgPaths.p333e9f00}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_5"
                  />
                  <path
                    d={svgPaths.p3d6bd970}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_6"
                  />
                  <path
                    d={svgPaths.pfa39ef0}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_7"
                  />
                  <path
                    d={svgPaths.p311d1180}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_8"
                  />
                  <path
                    d={svgPaths.p21491e00}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_9"
                  />
                  <path
                    d={svgPaths.p38ac1800}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_10"
                  />
                  <path
                    d={svgPaths.p19abf200}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_11"
                  />
                  <path
                    d={svgPaths.p36972580}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_12"
                  />
                  <path
                    d={svgPaths.p2753c00}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_13"
                  />
                  <path
                    d={svgPaths.p31aaf810}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_14"
                  />
                  <path
                    d={svgPaths.p18ac6c00}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_15"
                  />
                  <path
                    d={svgPaths.p95e0df0}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_16"
                  />
                  <path
                    d={svgPaths.p33048a00}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_17"
                  />
                  <path
                    d={svgPaths.p3817f780}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_18"
                  />
                  <path
                    d={svgPaths.p36cd3300}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_19"
                  />
                  <path
                    d={svgPaths.p2cad4c80}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_20"
                  />
                  <path
                    d={svgPaths.p3da07300}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_21"
                  />
                </g>
              </svg>
            </div>
          </div>
          <StyledButton
            variant="primary"
            className="content-stretch flex items-center justify-center"
            data-name="BOTON INSTA"
            href={URL_INSTAGRAM}
          >
            <div
              className="h-[9.046px] relative shrink-0 w-[118.798px]"
              data-name="Button text"
            >
              <svg
                className="absolute block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 118.798 9.04592"
              >
                <g id="Button text">
                  <path
                    d={svgPaths.p3e84680}
                    fill="var(--fill-0, white)"
                    id="Vector"
                  />
                  <path
                    d={svgPaths.p2eaf0b00}
                    fill="var(--fill-0, white)"
                    id="Vector_2"
                  />
                  <path
                    d={svgPaths.p4a8b80}
                    fill="var(--fill-0, white)"
                    id="Vector_3"
                  />
                  <path
                    d={svgPaths.p21946d00}
                    fill="var(--fill-0, white)"
                    id="Vector_4"
                  />
                  <path
                    d={svgPaths.p33bd1780}
                    fill="var(--fill-0, white)"
                    id="Vector_5"
                  />
                  <path
                    d={svgPaths.p1aa84800}
                    fill="var(--fill-0, white)"
                    id="Vector_6"
                  />
                  <path
                    d={svgPaths.p32babb80}
                    fill="var(--fill-0, white)"
                    id="Vector_7"
                  />
                  <path
                    d={svgPaths.pb85d220}
                    fill="var(--fill-0, white)"
                    id="Vector_8"
                  />
                  <path
                    d={svgPaths.p36ffae80}
                    fill="var(--fill-0, white)"
                    id="Vector_9"
                  />
                  <path
                    d={svgPaths.p16e39300}
                    fill="var(--fill-0, white)"
                    id="Vector_10"
                  />
                  <path
                    d={svgPaths.p27562700}
                    fill="var(--fill-0, white)"
                    id="Vector_11"
                  />
                  <path
                    d={svgPaths.p20c2b200}
                    fill="var(--fill-0, white)"
                    id="Vector_12"
                  />
                  <path
                    d={svgPaths.p27177a00}
                    fill="var(--fill-0, white)"
                    id="Vector_13"
                  />
                  <path
                    d={svgPaths.p27b533f0}
                    fill="var(--fill-0, white)"
                    id="Vector_14"
                  />
                </g>
              </svg>
            </div>
          </StyledButton>
        </div>
      </div>
      <div
        className="absolute contents left-[-11.47px] top-[3506.02px]"
        data-name="SECCION ALBUM Y PLAYLIST"
      >
        <div
          className="absolute h-[326.344px] left-[-11.47px] opacity-50 top-[3928.64px] w-[386.469px]"
          data-name="TEXTURA PAPEL"
        >
          <img
            alt=""
            className="absolute block max-w-none size-full"
            height="326.344"
            src={imgTexturaPapel2}
            width="386.469"
          />
        </div>
        <div
          className="absolute h-[427.132px] left-[-0.69px] top-[4254.98px] w-[375.695px]"
          data-name="FONDO"
        >
          <svg
            className="absolute block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 375.695 427.132"
          >
            <path
              d="M0 0H375.695V427.132H0V0Z"
              fill="var(--fill-0, #938F38)"
              id="FONDO"
            />
          </svg>
        </div>
        <div
          className="absolute h-[421.918px] left-[-0.35px] top-[3506.02px] w-[375.348px]"
          data-name="FOTO BODEGA"
        >
          <img
            alt=""
            className="absolute block max-w-none size-full"
            height="421.918"
            src={imgFotoBodega}
            width="375.348"
          />
        </div>
        <div className="absolute bottom-[29.74%] flex items-center justify-center right-[47.35px] top-[69.14%] w-[77.398px]">
          <div className="flex-none h-[54.912px] rotate-[7.79deg] w-[70.606px]">
            <div
              className="relative size-full"
              data-name="CAMARA FOTOS"
            >
              <svg
                className="absolute block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 70.606 54.912"
              >
                <g id="CAMARA FOTOS">
                  <path
                    d={svgPaths.p32fdf00}
                    fill="var(--fill-0, #2C3C1A)"
                  />
                  <path
                    d={svgPaths.p2c5b0380}
                    fill="var(--fill-0, #2C3C1A)"
                  />
                  <path
                    d={svgPaths.pb340600}
                    fill="var(--fill-0, #2C3C1A)"
                  />
                  <path
                    d={svgPaths.p13982400}
                    fill="var(--fill-0, #2C3C1A)"
                  />
                  <path
                    d={svgPaths.p7968c00}
                    fill="var(--fill-0, #2C3C1A)"
                  />
                  <path
                    d={svgPaths.p3cd7a100}
                    fill="var(--fill-0, #2C3C1A)"
                  />
                  <path
                    d={svgPaths.p742c300}
                    fill="var(--fill-0, #2C3C1A)"
                  />
                  <path
                    d={svgPaths.p1b70f100}
                    fill="var(--fill-0, #2C3C1A)"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div
          className="absolute contents h-[193.68px] right-[11.78px] top-[4195.84px] w-[169.246px]"
          data-name="FOTO MARCO"
        >
          <div
            className="absolute flex h-[168.285px] items-center justify-center left-[212.6px] top-[4208.17px] w-[135.615px]"
            style={
              {
                "--transform-inner-width": "1200",
                "--transform-inner-height": "157",
              } as React.CSSProperties
            }
          >
            <div className="flex-none rotate-[-8.04deg]">
              <div
                className="h-[153.679px] relative w-[115.259px]"
                data-name="IMG_5121 2"
              >
                <img
                  alt=""
                  className="absolute block max-w-none size-full"
                  height="153.679"
                  src={imgImg16911}
                  width="115.259"
                />
              </div>
            </div>
          </div>
          <div className="absolute flex inset-[73.66%_4.87%_23.13%_53.5%] items-center justify-center">
            <div className="flex-none h-[165.431px] rotate-[-8.42deg] w-[133.457px]">
              <div
                className="relative size-full"
                data-name="Vector"
              >
                <svg
                  className="absolute block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 133.457 165.431"
                >
                  <path
                    clipRule="evenodd"
                    d={svgPaths.p15749ff2}
                    fill="var(--fill-0, #E0DFCA)"
                    fillRule="evenodd"
                    id="Vector"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute contents h-[195.295px] left-[6px] top-[3822px] w-[170.859px]"
          data-name="FOTO MARCO"
        >
          <div
            className="absolute flex h-[161.71px] items-center justify-center left-[26.46px] top-[3839.52px] w-[131.258px]"
            style={
              {
                "--transform-inner-width": "1200",
                "--transform-inner-height": "154",
              } as React.CSSProperties
            }
          >
            <div className="flex-none rotate-[5.61deg]">
              <div
                className="h-[150.991px] relative w-[117.06px]"
                data-name="IMG_7192_Original 1"
              >
                <img
                  alt=""
                  className="absolute block max-w-none size-full"
                  height="150.991"
                  src={imgImg7192Original1}
                  width="117.06"
                />
              </div>
            </div>
          </div>
          <div
            className="absolute flex h-[195.295px] items-center justify-center left-[6px] top-[3822px] w-[170.859px]"
            style={
              {
                "--transform-inner-width": "1200",
                "--transform-inner-height": "19",
              } as React.CSSProperties
            }
          >
            <div className="flex-none rotate-[-3.7deg]">
              <div
                className="h-[185.416px] relative w-[159.238px]"
                data-name="Photo frame"
              >
                <svg
                  className="absolute block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 159.238 185.416"
                >
                  <g id="Photo frame">
                    <path
                      clipRule="evenodd"
                      d={svgPaths.p37f90d80}
                      fill="var(--fill-0, #E0DFCA)"
                      fillRule="evenodd"
                      id="Vector"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute h-[48.618px] left-[87.63px] top-[4402.65px] w-[199.278px]"
          data-name="Section title"
        >
          <svg
            className="absolute block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 199.278 48.6183"
          >
            <g id="Section title">
              <path
                d={svgPaths.p36e6b900}
                fill="var(--fill-0, white)"
                id="Vector"
              />
              <path
                d={svgPaths.p26057100}
                fill="var(--fill-0, white)"
                id="Vector_2"
              />
              <path
                d={svgPaths.p29023600}
                fill="var(--fill-0, white)"
                id="Vector_3"
              />
              <path
                d={svgPaths.p3383d700}
                fill="var(--fill-0, white)"
                id="Vector_4"
              />
              <path
                d={svgPaths.p5ba8c80}
                fill="var(--fill-0, white)"
                id="Vector_5"
              />
              <path
                d={svgPaths.p26dc500}
                fill="var(--fill-0, white)"
                id="Vector_6"
              />
              <path
                d={svgPaths.pc946200}
                fill="var(--fill-0, white)"
                id="Vector_7"
              />
              <path
                d={svgPaths.p37876f00}
                fill="var(--fill-0, white)"
                id="Vector_8"
              />
              <path
                d={svgPaths.p2ffe80b0}
                fill="var(--fill-0, white)"
                id="Vector_9"
              />
              <path
                d={svgPaths.pfa10600}
                fill="var(--fill-0, white)"
                id="Vector_10"
              />
              <path
                d={svgPaths.p1c7f3880}
                fill="var(--fill-0, white)"
                id="Vector_11"
              />
              <path
                d={svgPaths.p3d74a300}
                fill="var(--fill-0, white)"
                id="Vector_12"
              />
              <path
                d={svgPaths.pcc5c300}
                fill="var(--fill-0, white)"
                id="Vector_13"
              />
              <path
                d={svgPaths.p32df000}
                fill="var(--fill-0, white)"
                id="Vector_14"
              />
              <path
                d={svgPaths.pf48340}
                fill="var(--fill-0, white)"
                id="Vector_15"
              />
              <path
                d={svgPaths.p31b94800}
                fill="var(--fill-0, white)"
                id="Vector_16"
              />
              <path
                d={svgPaths.p34bf4b00}
                fill="var(--fill-0, white)"
                id="Vector_17"
              />
              <path
                d={svgPaths.p2f335d00}
                fill="var(--fill-0, white)"
                id="Vector_18"
              />
              <path
                d={svgPaths.p29731000}
                fill="var(--fill-0, white)"
                id="Vector_19"
              />
              <path
                d={svgPaths.p25bcb500}
                fill="var(--fill-0, white)"
                id="Vector_20"
              />
              <path
                d={svgPaths.p37364000}
                fill="var(--fill-0, white)"
                id="Vector_21"
              />
              <path
                d={svgPaths.pb33a800}
                fill="var(--fill-0, white)"
                id="Vector_22"
              />
              <path
                d={svgPaths.pc84dd00}
                fill="var(--fill-0, white)"
                id="Vector_23"
              />
              <path
                d={svgPaths.p20eb7380}
                fill="var(--fill-0, white)"
                id="Vector_24"
              />
              <path
                d={svgPaths.p1801d400}
                fill="var(--fill-0, white)"
                id="Vector_25"
              />
              <path
                d={svgPaths.p10f73800}
                fill="var(--fill-0, white)"
                id="Vector_26"
              />
            </g>
          </svg>
        </div>
        <div
          className="absolute h-[25.471px] left-[96.67px] top-[4482.68px] w-[181.498px]"
          data-name="Section description"
        >
          <svg
            className="absolute block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 181.498 25.4708"
          >
            <g id="Section description">
              <path
                d={svgPaths.p30f57200}
                fill="var(--fill-0, white)"
                id="Vector"
              />
              <path
                d={svgPaths.p3c21db00}
                fill="var(--fill-0, white)"
                id="Vector_2"
              />
              <path
                d={svgPaths.pfb4ce00}
                fill="var(--fill-0, white)"
                id="Vector_3"
              />
              <path
                d={svgPaths.p29838d00}
                fill="var(--fill-0, white)"
                id="Vector_4"
              />
              <path
                d={svgPaths.p1c228680}
                fill="var(--fill-0, white)"
                id="Vector_5"
              />
              <path
                d={svgPaths.p36f4e080}
                fill="var(--fill-0, white)"
                id="Vector_6"
              />
              <path
                d={svgPaths.p3056d800}
                fill="var(--fill-0, white)"
                id="Vector_7"
              />
              <path
                d={svgPaths.p15afc900}
                fill="var(--fill-0, white)"
                id="Vector_8"
              />
              <path
                d={svgPaths.pd92de80}
                fill="var(--fill-0, white)"
                id="Vector_9"
              />
              <path
                d={svgPaths.p11c510}
                fill="var(--fill-0, white)"
                id="Vector_10"
              />
              <path
                d={svgPaths.pb0f7c80}
                fill="var(--fill-0, white)"
                id="Vector_11"
              />
              <path
                d={svgPaths.p2d527200}
                fill="var(--fill-0, white)"
                id="Vector_12"
              />
              <path
                d={svgPaths.p23e73680}
                fill="var(--fill-0, white)"
                id="Vector_13"
              />
              <path
                d={svgPaths.p2a7d1980}
                fill="var(--fill-0, white)"
                id="Vector_14"
              />
              <path
                d={svgPaths.p3c2b2a80}
                fill="var(--fill-0, white)"
                id="Vector_15"
              />
              <path
                d={svgPaths.p24ca7900}
                fill="var(--fill-0, white)"
                id="Vector_16"
              />
              <path
                d={svgPaths.p265ed1c0}
                fill="var(--fill-0, white)"
                id="Vector_17"
              />
              <path
                d={svgPaths.p2e090c00}
                fill="var(--fill-0, white)"
                id="Vector_18"
              />
              <path
                d={svgPaths.p1936d100}
                fill="var(--fill-0, white)"
                id="Vector_19"
              />
              <path
                d={svgPaths.p388b7b00}
                fill="var(--fill-0, white)"
                id="Vector_20"
              />
              <path
                d={svgPaths.p2d390500}
                fill="var(--fill-0, white)"
                id="Vector_21"
              />
              <path
                d={svgPaths.pe18d6c0}
                fill="var(--fill-0, white)"
                id="Vector_22"
              />
              <path
                d={svgPaths.p79e9040}
                fill="var(--fill-0, white)"
                id="Vector_23"
              />
              <path
                d={svgPaths.pabadf00}
                fill="var(--fill-0, white)"
                id="Vector_24"
              />
              <path
                d={svgPaths.p3a619200}
                fill="var(--fill-0, white)"
                id="Vector_25"
              />
              <path
                d={svgPaths.p36219800}
                fill="var(--fill-0, white)"
                id="Vector_26"
              />
              <path
                d={svgPaths.p1c4bf200}
                fill="var(--fill-0, white)"
                id="Vector_27"
              />
              <path
                d={svgPaths.pa393680}
                fill="var(--fill-0, white)"
                id="Vector_28"
              />
              <path
                d={svgPaths.p30aabc80}
                fill="var(--fill-0, white)"
                id="Vector_29"
              />
              <path
                d={svgPaths.p12f91180}
                fill="var(--fill-0, white)"
                id="Vector_30"
              />
              <path
                d={svgPaths.p20486b80}
                fill="var(--fill-0, white)"
                id="Vector_31"
              />
              <path
                d={svgPaths.p288b82f0}
                fill="var(--fill-0, white)"
                id="Vector_32"
              />
              <path
                d={svgPaths.p3cacba00}
                fill="var(--fill-0, white)"
                id="Vector_33"
              />
              <path
                d={svgPaths.p3d5b8580}
                fill="var(--fill-0, white)"
                id="Vector_34"
              />
              <path
                d={svgPaths.p3e58af00}
                fill="var(--fill-0, white)"
                id="Vector_35"
              />
              <path
                d={svgPaths.p2413770}
                fill="var(--fill-0, white)"
                id="Vector_36"
              />
              <path
                d={svgPaths.p2c70e972}
                fill="var(--fill-0, white)"
                id="Vector_37"
              />
              <path
                d={svgPaths.pe614000}
                fill="var(--fill-0, white)"
                id="Vector_38"
              />
              <path
                d={svgPaths.p37e16b00}
                fill="var(--fill-0, white)"
                id="Vector_39"
              />
              <path
                d={svgPaths.pde53300}
                fill="var(--fill-0, white)"
                id="Vector_40"
              />
              <path
                d={svgPaths.p2662ae80}
                fill="var(--fill-0, white)"
                id="Vector_41"
              />
              <path
                d={svgPaths.p3e557100}
                fill="var(--fill-0, white)"
                id="Vector_42"
              />
              <path
                d={svgPaths.p21064e00}
                fill="var(--fill-0, white)"
                id="Vector_43"
              />
              <path
                d={svgPaths.p4d3a00}
                fill="var(--fill-0, white)"
                id="Vector_44"
              />
              <path
                d={svgPaths.p393afb40}
                fill="var(--fill-0, white)"
                id="Vector_45"
              />
            </g>
          </svg>
        </div>
        <div
          className="absolute h-[38.317px] left-[190.44px] top-[4528.88px] w-[155.03px]"
          data-name="Section description"
        >
          <svg
            className="absolute block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 155.03 38.3171"
            style={{ overflow: "visible" }}
          >
            <g id="Section description">
              <path
                d={svgPaths.p1049f700}
                fill="var(--fill-0, white)"
                id="Vector"
              />
              <path
                d={svgPaths.p3fafa400}
                fill="var(--fill-0, white)"
                id="Vector_2"
              />
              <path
                d={svgPaths.p3d370200}
                fill="var(--fill-0, white)"
                id="Vector_3"
              />
              <path
                d={svgPaths.p26725380}
                fill="var(--fill-0, white)"
                id="Vector_4"
              />
              <path
                d={svgPaths.p6f0e580}
                fill="var(--fill-0, white)"
                id="Vector_5"
              />
              <path
                d={svgPaths.pe6eac00}
                fill="var(--fill-0, white)"
                id="Vector_6"
              />
              <path
                d={svgPaths.p10da3a80}
                fill="var(--fill-0, white)"
                id="Vector_7"
              />
              <path
                d={svgPaths.p1ac7bd00}
                fill="var(--fill-0, white)"
                id="Vector_8"
              />
              <path
                d={svgPaths.p1fc7780}
                fill="var(--fill-0, white)"
                id="Vector_9"
              />
              <path
                d={svgPaths.pe530600}
                fill="var(--fill-0, white)"
                id="Vector_10"
              />
              <path
                d={svgPaths.p3ece7900}
                fill="var(--fill-0, white)"
                id="Vector_11"
              />
              <path
                d={svgPaths.p428ac00}
                fill="var(--fill-0, white)"
                id="Vector_12"
              />
              <path
                d={svgPaths.p2c47a780}
                fill="var(--fill-0, white)"
                id="Vector_13"
              />
              <path
                d={svgPaths.p2296e6c0}
                fill="var(--fill-0, white)"
                id="Vector_14"
              />
              <path
                d={svgPaths.p3ef5f200}
                fill="var(--fill-0, white)"
                id="Vector_15"
              />
              <path
                d={svgPaths.p41d7f00}
                fill="var(--fill-0, white)"
                id="Vector_16"
              />
              <path
                d={svgPaths.p3772df00}
                fill="var(--fill-0, white)"
                id="Vector_17"
              />
              <path
                d={svgPaths.p4970000} //p4970000
                fill="var(--fill-0, white)"
                id="Vector_18"
              />
              <path
                d={svgPaths.p3eb0300} //
                fill="var(--fill-0, white)"
                id="Vector_19"
              />
              <path
                d={svgPaths.p133ff280}
                fill="var(--fill-0, white)"
                id="Vector_20"
                style={{ transform: "translate(-1px, -3px)" }}
              />
              <path
                d={svgPaths.p2ba60bf0}
                fill="var(--fill-0, white)"
                id="Vector_21"
              />
              <path
                d={svgPaths.p2349ac80}
                fill="var(--fill-0, white)"
                id="Vector_22"
              />
              <path
                d={svgPaths.p384f3040}
                fill="var(--fill-0, white)"
                id="Vector_23"
              />
              <path
                d={svgPaths.p32097d00}
                fill="var(--fill-0, white)"
                id="Vector_24"
              />
              <path
                d={svgPaths.p14c7eb00}
                fill="var(--fill-0, white)"
                id="Vector_25"
              />
              <path
                d={svgPaths.p13a23180}
                fill="var(--fill-0, white)"
                id="Vector_26"
              />
              <path
                d={svgPaths.p5ea5100}
                fill="var(--fill-0, white)"
                id="Vector_27"
              />
              <path
                d={svgPaths.p1fb16200}
                fill="var(--fill-0, white)"
                id="Vector_28"
              />
              <path
                d={svgPaths.p14403200}
                fill="var(--fill-0, white)"
                id="Vector_29"
              />
              <path
                d={svgPaths.p3302f770}
                fill="var(--fill-0, white)"
                id="Vector_30"
              />
              <path
                d={svgPaths.p3e097700}
                fill="var(--fill-0, white)"
                id="Vector_31"
              />
            </g>
          </svg>
        </div>
        <div
          className="absolute flex h-[33.969px] items-center justify-center left-[274.54px] top-[4492.42px] w-[36.229px]"
          style={
            {
              "--transform-inner-width": "1200",
              "--transform-inner-height": "19",
            } as React.CSSProperties
          }
        >
          <div className="flex-none rotate-[-159.92deg]">
            <div
              className="h-[25.47px] relative w-[29.263px]"
              data-name="Vector 17 (Stroke)"
            >
              <svg
                className="absolute block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 29.2633 25.4705"
              >
                <path
                  d={svgPaths.p21bfa1f0}
                  fill="var(--fill-0, #C4C295)"
                  id="Vector 17 (Stroke)"
                />
              </svg>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-[75.55%_60.88%_23.1%_10.28%]"
          data-name="ICONO MUSICA"
        >
          <svg
            className="absolute block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 108.262 77.2792"
          >
            <g id="ICONO MUSICA">
              <path
                d={svgPaths.p4417600}
                fill="var(--fill-0, white)"
              />
              <path
                d={svgPaths.p2deb6b80}
                fill="var(--fill-0, white)"
              />
              <path
                d={svgPaths.p17a8b00}
                fill="var(--fill-0, white)"
              />
              <path
                d={svgPaths.pea97f80}
                fill="var(--fill-0, white)"
              />
              <path
                d={svgPaths.p3e462000}
                fill="var(--fill-0, white)"
              />
            </g>
          </svg>
        </div>
        <StyledButton
          variant="secondary"
          className="-translate-x-1/2 absolute left-[calc(50%+0.25px)] top-[4607.89px]"
          data-name="BOTON SUMATE PLAYLIST"
          href={URL_PLAYLIST}
        >
          <div
            className="h-[9.046px] relative shrink-0 w-[182.237px]"
            data-name="Button text"
          >
            <svg
              className="absolute block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 182.237 9.0459"
            >
              <g id="Button text">
                <path
                  d={svgPaths.p3b47400}
                  fill="var(--fill-0, white)"
                  id="Vector"
                />
                <path
                  d={svgPaths.p3abfec0}
                  fill="var(--fill-0, white)"
                  id="Vector_2"
                />
                <path
                  d={svgPaths.p296153f0}
                  fill="var(--fill-0, white)"
                  id="Vector_3"
                />
                <path
                  d={svgPaths.p10cc8f00}
                  fill="var(--fill-0, white)"
                  id="Vector_4"
                />
                <path
                  d={svgPaths.p2642ed00}
                  fill="var(--fill-0, white)"
                  id="Vector_5"
                />
                <path
                  d={svgPaths.pf21a900}
                  fill="var(--fill-0, white)"
                  id="Vector_6"
                />
                <path
                  d={svgPaths.p1e88e600}
                  fill="var(--fill-0, white)"
                  id="Vector_7"
                />
                <path
                  d={svgPaths.p3f573f10}
                  fill="var(--fill-0, white)"
                  id="Vector_8"
                />
                <path
                  d={svgPaths.p12dbab00}
                  fill="var(--fill-0, white)"
                  id="Vector_9"
                />
                <path
                  d={svgPaths.p177cb820}
                  fill="var(--fill-0, white)"
                  id="Vector_10"
                />
                <path
                  d={svgPaths.p2ea1cf80}
                  fill="var(--fill-0, white)"
                  id="Vector_11"
                />
                <path
                  d={svgPaths.p900aa80}
                  fill="var(--fill-0, white)"
                  id="Vector_12"
                />
                <path
                  d={svgPaths.p1a07c400}
                  fill="var(--fill-0, white)"
                  id="Vector_13"
                />
                <path
                  d={svgPaths.p2f86db00}
                  fill="var(--fill-0, white)"
                  id="Vector_14"
                />
                <path
                  d={svgPaths.p3243000}
                  fill="var(--fill-0, white)"
                  id="Vector_15"
                />
                <path
                  d={svgPaths.p26cb1900}
                  fill="var(--fill-0, white)"
                  id="Vector_16"
                />
                <path
                  d={svgPaths.p31295700}
                  fill="var(--fill-0, white)"
                  id="Vector_17"
                />
                <path
                  d={svgPaths.p2ab1cdc0}
                  fill="var(--fill-0, white)"
                  id="Vector_18"
                />
                <path
                  d={svgPaths.p2bd59d80}
                  fill="var(--fill-0, white)"
                  id="Vector_19"
                />
                <path
                  d={svgPaths.p3db4c500}
                  fill="var(--fill-0, white)"
                  id="Vector_20"
                />
                <path
                  d={svgPaths.p1f304e00}
                  fill="var(--fill-0, white)"
                  id="Vector_21"
                />
                <path
                  d={svgPaths.p9d11f80}
                  fill="var(--fill-0, white)"
                  id="Vector_22"
                />
              </g>
            </svg>
          </div>
        </StyledButton>
        <div
          className="absolute content-stretch flex flex-col gap-[20px] items-center left-[59.43px] top-[4033.94px] w-[255.792px]"
          data-name="Section container"
        >
          <div
            className="h-[19.284px] relative shrink-0 w-[193.544px]"
            data-name="Section title"
          >
            <svg
              className="absolute block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 193.544 19.2845"
            >
              <g id="Section title">
                <path
                  d={svgPaths.p332bb900}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector"
                />
                <path
                  d={svgPaths.p1c8d5000}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_2"
                />
                <path
                  d={svgPaths.p37d6d280}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_3"
                />
                <path
                  d={svgPaths.p3e10d00}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_4"
                />
                <path
                  d={svgPaths.p19e3c580}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_5"
                />
                <path
                  d={svgPaths.p2efba900}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_6"
                />
                <path
                  d={svgPaths.p20829c80}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_7"
                />
                <path
                  d={svgPaths.p804eb80}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_8"
                />
                <path
                  d={svgPaths.p2879aa00}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_9"
                />
                <path
                  d={svgPaths.p3b2be7c0}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_10"
                />
                <path
                  d={svgPaths.p53d2770}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_11"
                />
                <path
                  d={svgPaths.p2575500}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_12"
                />
              </g>
            </svg>
          </div>
          <div
            className="h-[37.123px] relative shrink-0 w-[239.347px]"
            data-name="Section description"
          >
            <svg
              className="absolute block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 239.347 37.1231"
            >
              <g id="Section description">
                <path
                  d={svgPaths.p10ad3200}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector"
                />
                <path
                  d={svgPaths.p224b3180}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_2"
                />
                <path
                  d={svgPaths.p1be0c500}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_3"
                />
                <path
                  d={svgPaths.p3a869300}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_4"
                />
                <path
                  d={svgPaths.pf29c720}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_5"
                />
                <path
                  d={svgPaths.p2d0a8200}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_6"
                />
                <path
                  d={svgPaths.p1cef78f0}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_7"
                />
                <path
                  d={svgPaths.p22fa9c80}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_8"
                />
                <path
                  d={svgPaths.p2dc93f80}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_9"
                />
                <path
                  d={svgPaths.p2e465700}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_10"
                />
                <path
                  d={svgPaths.p1b62ac00}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_11"
                />
                <path
                  d={svgPaths.pa42cc00}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_12"
                />
                <path
                  d={svgPaths.p2899e200}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_13"
                />
                <path
                  d={svgPaths.p27a6fa00}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_14"
                />
                <path
                  d={svgPaths.p1a327a00}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_15"
                />
                <path
                  d={svgPaths.p21bb5400}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_16"
                />
                <path
                  d={svgPaths.p33f28400}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_17"
                />
                <path
                  d={svgPaths.p2d487000}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_18"
                />
                <path
                  d={svgPaths.p21863f00}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_19"
                />
                <path
                  d={svgPaths.p2bdf9240}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_20"
                />
                <path
                  d={svgPaths.pbfaf800}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_21"
                />
                <path
                  d={svgPaths.pdd8ef00}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_22"
                />
                <path
                  d={svgPaths.p5b9f500}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_23"
                />
                <path
                  d={svgPaths.p3c245b80}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_24"
                />
                <path
                  d={svgPaths.p3708e00}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_25"
                />
                <path
                  d={svgPaths.p1aa16c00}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_26"
                />
                <path
                  d={svgPaths.p26f50100}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_27"
                />
                <path
                  d={svgPaths.p22281000}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_28"
                />
                <path
                  d={svgPaths.p250e8b80}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_29"
                />
                <path
                  d={svgPaths.p133bf00}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_30"
                />
                <path
                  d={svgPaths.p9218b00}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_31"
                />
                <path
                  d={svgPaths.p34208c20}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_32"
                />
                <path
                  d={svgPaths.p2d236c00}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_33"
                />
                <path
                  d={svgPaths.p14b93f00}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_34"
                />
                <path
                  d={svgPaths.p24bb6740}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_35"
                />
                <path
                  d={svgPaths.p1a68d780}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_36"
                />
                <path
                  d={svgPaths.p371d7480}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_37"
                />
                <path
                  d={svgPaths.p15f8f600}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_38"
                />
                <path
                  d={svgPaths.pc859600}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_39"
                />
                <path
                  d={svgPaths.p3f3483f0}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_40"
                />
                <path
                  d={svgPaths.p2cfc2780}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_41"
                />
                <path
                  d={svgPaths.pcb0a200}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_42"
                />
                <path
                  d={svgPaths.p3279e500}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_43"
                />
                <path
                  d={svgPaths.p1c4fb1c0}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_44"
                />
                <path
                  d={svgPaths.p13b86180}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_45"
                />
                <path
                  d={svgPaths.p2831d670}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_46"
                />
                <path
                  d={svgPaths.p13e2e400}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_47"
                />
                <path
                  d={svgPaths.pbfc4200}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_48"
                />
                <path
                  d={svgPaths.p13aa8a80}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_49"
                />
                <path
                  d={svgPaths.p2570f800}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_50"
                />
                <path
                  d={svgPaths.p303af200}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_51"
                />
                <path
                  d={svgPaths.p2277f80}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_52"
                />
                <path
                  d={svgPaths.p2fd9bb00}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_53"
                />
                <path
                  d={svgPaths.pfb3ad00}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_54"
                />
                <path
                  d={svgPaths.p30d03e00}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_55"
                />
                <path
                  d={svgPaths.p15000b00}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_56"
                />
                <path
                  d={svgPaths.p3e4d7400}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_57"
                />
                <path
                  d={svgPaths.p2b692b00}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_58"
                />
                <path
                  d={svgPaths.p3dac8e00}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_59"
                />
                <path
                  d={svgPaths.p15652900}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_60"
                />
                <path
                  d={svgPaths.p288dbc00}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_61"
                />
                <path
                  d={svgPaths.p22e5ac00}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_62"
                />
                <path
                  d={svgPaths.p21863680}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_63"
                />
                <path
                  d={svgPaths.p1e552700}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_64"
                />
                <path
                  d={svgPaths.p28387970}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_65"
                />
                <path
                  d={svgPaths.p3068d00}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_66"
                />
                <path
                  d={svgPaths.pa367000}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_67"
                />
                <path
                  d={svgPaths.p3d105180}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_68"
                />
                <path
                  d={svgPaths.p31cf8200}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_69"
                />
                <path
                  d={svgPaths.p30ed9d00}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_70"
                />
                <path
                  d={svgPaths.p2133e000}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_71"
                />
                <path
                  d={svgPaths.p3f1e9300}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_72"
                />
                <path
                  d={svgPaths.p277b6280}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_73"
                />
                <path
                  d={svgPaths.p6014980}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_74"
                />
                <path
                  d={svgPaths.p14282d60}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_75"
                />
                <path
                  d={svgPaths.p2d456000}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_76"
                />
                <path
                  d={svgPaths.p1151eae0}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_77"
                />
                <path
                  d={svgPaths.p1f6e4980}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_78"
                />
                <path
                  d={svgPaths.p244f0800}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_79"
                />
                <path
                  d={svgPaths.p6f1da00}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_80"
                />
                <path
                  d={svgPaths.p475a140}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_81"
                />
                <path
                  d={svgPaths.p3d7abf00}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_82"
                />
                <path
                  d={svgPaths.pfc76300}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_83"
                />
                <path
                  d={svgPaths.p219ce480}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_84"
                />
                <path
                  d={svgPaths.p1209f680}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_85"
                />
                <path
                  d={svgPaths.p3bb2bc80}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_86"
                />
                <path
                  d={svgPaths.p31493100}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_87"
                />
                <path
                  d={svgPaths.p27829a00}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_88"
                />
                <path
                  d={svgPaths.p1cab6b80}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_89"
                />
                <path
                  d={svgPaths.p378eb200}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_90"
                />
                <path
                  d={svgPaths.p1d2f1f80}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_91"
                />
                <path
                  d={svgPaths.p312ecf00}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_92"
                />
                <path
                  d={svgPaths.p2e2ae200}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_93"
                />
                <path
                  d={svgPaths.p8d12dc0}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_94"
                />
                <path
                  d={svgPaths.p3fbbc680}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_95"
                />
                <path
                  d={svgPaths.p6177bf0}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_96"
                />
              </g>
            </svg>
          </div>
          <StyledButton
            variant="secondary"
            className="content-stretch flex items-center justify-center"
            data-name="BOTON SUMATE ALBUM"
            href={URL_ALBUM}
          >
            <div
              className="h-[9.046px] relative shrink-0 w-[169.779px]"
              data-name="Button text"
            >
              <svg
                className="absolute block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 169.78 9.04594"
              >
                <g id="Button text">
                  <path
                    d={svgPaths.p2cc88480}
                    fill="var(--fill-0, white)"
                    id="Vector"
                  />
                  <path
                    d={svgPaths.p218b7300}
                    fill="var(--fill-0, white)"
                    id="Vector_2"
                  />
                  <path
                    d={svgPaths.p15e2b180}
                    fill="var(--fill-0, white)"
                    id="Vector_3"
                  />
                  <path
                    d={svgPaths.p2dc48500}
                    fill="var(--fill-0, white)"
                    id="Vector_4"
                  />
                  <path
                    d={svgPaths.p1bad1e80}
                    fill="var(--fill-0, white)"
                    id="Vector_5"
                  />
                  <path
                    d={svgPaths.p345a9080}
                    fill="var(--fill-0, white)"
                    id="Vector_6"
                  />
                  <path
                    d={svgPaths.p177cb820}
                    fill="var(--fill-0, white)"
                    id="Vector_7"
                  />
                  <path
                    d={svgPaths.p2ea1cf80}
                    fill="var(--fill-0, white)"
                    id="Vector_8"
                  />
                  <path
                    d={svgPaths.p8c27e00}
                    fill="var(--fill-0, white)"
                    id="Vector_9"
                  />
                  <path
                    d={svgPaths.p3fc93f80}
                    fill="var(--fill-0, white)"
                    id="Vector_10"
                  />
                  <path
                    d={svgPaths.p1d47ca80}
                    fill="var(--fill-0, white)"
                    id="Vector_11"
                  />
                  <path
                    d={svgPaths.p2b6b5a70}
                    fill="var(--fill-0, white)"
                    id="Vector_12"
                  />
                  <path
                    d={svgPaths.p251caf00}
                    fill="var(--fill-0, white)"
                    id="Vector_13"
                  />
                  <path
                    d={svgPaths.p31295700}
                    fill="var(--fill-0, white)"
                    id="Vector_14"
                  />
                  <path
                    d={svgPaths.p2ab1cdc0}
                    fill="var(--fill-0, white)"
                    id="Vector_15"
                  />
                  <path
                    d={svgPaths.p2d2c5b00}
                    fill="var(--fill-0, white)"
                    id="Vector_16"
                  />
                  <path
                    d={svgPaths.p33db600}
                    fill="var(--fill-0, white)"
                    id="Vector_17"
                  />
                  <path
                    d={svgPaths.p5915700}
                    fill="var(--fill-0, white)"
                    id="Vector_18"
                  />
                  <path
                    d={svgPaths.p3002bd00}
                    fill="var(--fill-0, white)"
                    id="Vector_19"
                  />
                </g>
              </svg>
            </div>
          </StyledButton>
        </div>
      </div>
      <div
        className="-translate-x-1/2 absolute contents left-[calc(50%+0.33px)] top-[2703px]"
        data-name="SECCION ASISTENCIA Y TARJETA"
      >
        <div
          className="absolute h-[484px] left-0 right-[-0.65px] top-[2731px]"
          data-name="FONDO"
        >
          <svg
            className="absolute block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 376 484"
          >
            <path
              d="M0 0H376V484H0V0Z"
              fill="var(--fill-0, #2C3C1A)"
              id="FONDO"
            />
          </svg>
        </div>
        <div
          className="absolute h-[91px] right-[-0.65px] top-[3125px] w-[103px]"
          data-name="EUCALIPTO"
        >
          <img
            alt=""
            className="absolute block max-w-none size-full"
            height="91"
            src={imgEucalipto}
            width="103"
          />
        </div>
        <div
          className={`absolute content-stretch flex flex-col gap-[22.59px] items-center left-[55.91px] right-[54.95px] ${pagaTarjeta ? "top-[2800px]" : "top-[2860px]"}`}
          style={{
            paddingTop: `${pagaTarjeta ? "0px" : "30px"}`,
          }}
          data-name="SECCION ASISTENCIA"
        >
          <div
            className="h-[19.551px] relative shrink-0 w-[262.777px]"
            data-name="Section title"
          >
            <svg
              className="absolute block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 262.777 19.5515"
            >
              <g id="Section title">
                <path
                  d={svgPaths.p1b9aa580}
                  fill="var(--fill-0, white)"
                  id="Vector"
                />
                <path
                  d={svgPaths.p33bdc270}
                  fill="var(--fill-0, white)"
                  id="Vector_2"
                />
                <path
                  d={svgPaths.p2cf7f800}
                  fill="var(--fill-0, white)"
                  id="Vector_3"
                />
                <path
                  d={svgPaths.p337a800}
                  fill="var(--fill-0, white)"
                  id="Vector_4"
                />
                <path
                  d={svgPaths.pca45700}
                  fill="var(--fill-0, white)"
                  id="Vector_5"
                />
                <path
                  d={svgPaths.p3be50400}
                  fill="var(--fill-0, white)"
                  id="Vector_6"
                />
                <path
                  d={svgPaths.p3a850100}
                  fill="var(--fill-0, white)"
                  id="Vector_7"
                />
                <path
                  d={svgPaths.p38020200}
                  fill="var(--fill-0, white)"
                  id="Vector_8"
                />
                <path
                  d={svgPaths.p3ace2570}
                  fill="var(--fill-0, white)"
                  id="Vector_9"
                />
                <path
                  d={svgPaths.p37f50600}
                  fill="var(--fill-0, white)"
                  id="Vector_10"
                />
                <path
                  d={svgPaths.p10761e00}
                  fill="var(--fill-0, white)"
                  id="Vector_11"
                />
                <path
                  d={svgPaths.p30fd9c80}
                  fill="var(--fill-0, white)"
                  id="Vector_12"
                />
                <path
                  d={svgPaths.p358dd400}
                  fill="var(--fill-0, white)"
                  id="Vector_13"
                />
                <path
                  d={svgPaths.p3abb8100}
                  fill="var(--fill-0, white)"
                  id="Vector_14"
                />
                <path
                  d={svgPaths.p2bda7780}
                  fill="var(--fill-0, white)"
                  id="Vector_15"
                />
                <path
                  d={svgPaths.p3b4d7a80}
                  fill="var(--fill-0, white)"
                  id="Vector_16"
                />
                <path
                  d={svgPaths.p233a0600}
                  fill="var(--fill-0, white)"
                  id="Vector_17"
                />
                <path
                  d={svgPaths.p34183c00}
                  fill="var(--fill-0, white)"
                  id="Vector_18"
                />
                <path
                  d={svgPaths.p26878e00}
                  fill="var(--fill-0, white)"
                  id="Vector_19"
                />
              </g>
            </svg>
          </div>
          <div
            className="h-[67.471px] relative shrink-0 w-[225.215px]"
            data-name="Section description"
          >
            <svg
              className="absolute block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 225.215 67.4708"
            >
              <g id="Section description">
                <path
                  d={svgPaths.p3f646400}
                  fill="var(--fill-0, white)"
                  id="Vector"
                />
                <path
                  d={svgPaths.p5af6000}
                  fill="var(--fill-0, white)"
                  id="Vector_2"
                />
                <path
                  d={svgPaths.p28703b80}
                  fill="var(--fill-0, white)"
                  id="Vector_3"
                />
                <path
                  d={svgPaths.p6578000}
                  fill="var(--fill-0, white)"
                  id="Vector_4"
                />
                <path
                  d={svgPaths.p1f436ff0}
                  fill="var(--fill-0, white)"
                  id="Vector_5"
                />
                <path
                  d={svgPaths.p2e61980}
                  fill="var(--fill-0, white)"
                  id="Vector_6"
                />
                <path
                  d={svgPaths.p46a6000}
                  fill="var(--fill-0, white)"
                  id="Vector_7"
                />
                <path
                  d={svgPaths.p1ca0600}
                  fill="var(--fill-0, white)"
                  id="Vector_8"
                />
                <path
                  d={svgPaths.p3a0f0d00}
                  fill="var(--fill-0, white)"
                  id="Vector_9"
                />
                <path
                  d={svgPaths.pc971900}
                  fill="var(--fill-0, white)"
                  id="Vector_10"
                />
                <path
                  d={svgPaths.pca5c800}
                  fill="var(--fill-0, white)"
                  id="Vector_11"
                />
                <path
                  d={svgPaths.p3ebf9400}
                  fill="var(--fill-0, white)"
                  id="Vector_12"
                />
                <path
                  d={svgPaths.p2b566fc0}
                  fill="var(--fill-0, white)"
                  id="Vector_13"
                />
                <path
                  d={svgPaths.p1338600}
                  fill="var(--fill-0, white)"
                  id="Vector_14"
                />
                <path
                  d={svgPaths.p313f2280}
                  fill="var(--fill-0, white)"
                  id="Vector_15"
                />
                <path
                  d={svgPaths.p11233680}
                  fill="var(--fill-0, white)"
                  id="Vector_16"
                />
                <path
                  d={svgPaths.p14ab5400}
                  fill="var(--fill-0, white)"
                  id="Vector_17"
                />
                <path
                  d={svgPaths.p367b0700}
                  fill="var(--fill-0, white)"
                  id="Vector_18"
                />
                <path
                  d={svgPaths.pf951b00}
                  fill="var(--fill-0, white)"
                  id="Vector_19"
                />
                <path
                  d={svgPaths.p20cfa200}
                  fill="var(--fill-0, white)"
                  id="Vector_20"
                />
                <path
                  d={svgPaths.p3f443600}
                  fill="var(--fill-0, white)"
                  id="Vector_21"
                />
                <path
                  d={svgPaths.p157adb00}
                  fill="var(--fill-0, white)"
                  id="Vector_22"
                />
                <path
                  d={svgPaths.p10523100}
                  fill="var(--fill-0, white)"
                  id="Vector_23"
                />
                <path
                  d={svgPaths.p1238e80}
                  fill="var(--fill-0, white)"
                  id="Vector_24"
                />
                <path
                  d={svgPaths.p36e4f0c0}
                  fill="var(--fill-0, white)"
                  id="Vector_25"
                />
                <path
                  d={svgPaths.pa578af0}
                  fill="var(--fill-0, white)"
                  id="Vector_26"
                />
                <path
                  d={svgPaths.p19690d00}
                  fill="var(--fill-0, white)"
                  id="Vector_27"
                />
                <path
                  d={svgPaths.p1b086b80}
                  fill="var(--fill-0, white)"
                  id="Vector_28"
                />
                <path
                  d={svgPaths.p34cda000}
                  fill="var(--fill-0, white)"
                  id="Vector_29"
                />
                <path
                  d={svgPaths.p28dba000}
                  fill="var(--fill-0, white)"
                  id="Vector_30"
                />
                <path
                  d={svgPaths.p1a7a8e80}
                  fill="var(--fill-0, white)"
                  id="Vector_31"
                />
                <path
                  d={svgPaths.p26765d40}
                  fill="var(--fill-0, white)"
                  id="Vector_32"
                />
                <path
                  d={svgPaths.p209a9f00}
                  fill="var(--fill-0, white)"
                  id="Vector_33"
                />
                <path
                  d={svgPaths.p29b1400}
                  fill="var(--fill-0, white)"
                  id="Vector_34"
                />
                <path
                  d={svgPaths.p1d173900}
                  fill="var(--fill-0, white)"
                  id="Vector_35"
                />
                <path
                  d={svgPaths.p3afb300}
                  fill="var(--fill-0, white)"
                  id="Vector_36"
                />
                <path
                  d={svgPaths.p63c8400}
                  fill="var(--fill-0, white)"
                  id="Vector_37"
                />
                <path
                  d={svgPaths.p6410e00}
                  fill="var(--fill-0, white)"
                  id="Vector_38"
                />
                <path
                  d={svgPaths.p7b76e00}
                  fill="var(--fill-0, white)"
                  id="Vector_39"
                />
                <path
                  d={svgPaths.p11c92780}
                  fill="var(--fill-0, white)"
                  id="Vector_40"
                />
                <path
                  d={svgPaths.p213447b0}
                  fill="var(--fill-0, white)"
                  id="Vector_41"
                />
                <path
                  d={svgPaths.p3d4db7f0}
                  fill="var(--fill-0, white)"
                  id="Vector_42"
                />
                <path
                  d={svgPaths.p365af340}
                  fill="var(--fill-0, white)"
                  id="Vector_43"
                />
                <path
                  d={svgPaths.p2e949f00}
                  fill="var(--fill-0, white)"
                  id="Vector_44"
                />
                <path
                  d={svgPaths.p222558c0}
                  fill="var(--fill-0, white)"
                  id="Vector_45"
                />
                <path
                  d={svgPaths.p6e2e700}
                  fill="var(--fill-0, white)"
                  id="Vector_46"
                />
                <path
                  d={svgPaths.p2140ee00}
                  fill="var(--fill-0, white)"
                  id="Vector_47"
                />
                <path
                  d={svgPaths.p24854a80}
                  fill="var(--fill-0, white)"
                  id="Vector_48"
                />
                <path
                  d={svgPaths.p3d71bd00}
                  fill="var(--fill-0, white)"
                  id="Vector_49"
                />
                <path
                  d={svgPaths.p31206400}
                  fill="var(--fill-0, white)"
                  id="Vector_50"
                />
                <path
                  d={svgPaths.p55c6200}
                  fill="var(--fill-0, white)"
                  id="Vector_51"
                />
                <path
                  d={svgPaths.p1ec2bf00}
                  fill="var(--fill-0, white)"
                  id="Vector_52"
                />
                <path
                  d={svgPaths.pe371000}
                  fill="var(--fill-0, white)"
                  id="Vector_53"
                />
                <path
                  d={svgPaths.p27f40340}
                  fill="var(--fill-0, white)"
                  id="Vector_54"
                />
                <path
                  d={svgPaths.p33c4d800}
                  fill="var(--fill-0, white)"
                  id="Vector_55"
                />
                <path
                  d={svgPaths.p1a23d00}
                  fill="var(--fill-0, white)"
                  id="Vector_56"
                />
                <path
                  d={svgPaths.pce0ec0}
                  fill="var(--fill-0, white)"
                  id="Vector_57"
                />
                <path
                  d={svgPaths.p28c5bd80}
                  fill="var(--fill-0, white)"
                  id="Vector_58"
                />
                <path
                  d={svgPaths.p1a81ef00}
                  fill="var(--fill-0, white)"
                  id="Vector_59"
                />
                <path
                  d={svgPaths.p3e90280}
                  fill="var(--fill-0, white)"
                  id="Vector_60"
                />
                <path
                  d={svgPaths.p11e79c00}
                  fill="var(--fill-0, white)"
                  id="Vector_61"
                />
                <path
                  d={svgPaths.p21332f00}
                  fill="var(--fill-0, white)"
                  id="Vector_62"
                />
                <path
                  d={svgPaths.p2609c600}
                  fill="var(--fill-0, white)"
                  id="Vector_63"
                />
                <path
                  d={svgPaths.p315be980}
                  fill="var(--fill-0, white)"
                  id="Vector_64"
                />
                <path
                  d={svgPaths.pe3eba00}
                  fill="var(--fill-0, white)"
                  id="Vector_65"
                />
                <path
                  d={svgPaths.p3bdf6900}
                  fill="var(--fill-0, white)"
                  id="Vector_66"
                />
                <path
                  d={svgPaths.p1e416e00}
                  fill="var(--fill-0, white)"
                  id="Vector_67"
                />
                <path
                  d={svgPaths.peb50000}
                  fill="var(--fill-0, white)"
                  id="Vector_68"
                />
                <path
                  d={svgPaths.p38e0b100}
                  fill="var(--fill-0, white)"
                  id="Vector_69"
                />
                <path
                  d={svgPaths.pcb7d180}
                  fill="var(--fill-0, white)"
                  id="Vector_70"
                />
                <path
                  d={svgPaths.p22447c90}
                  fill="var(--fill-0, white)"
                  id="Vector_71"
                />
                <path
                  d={svgPaths.p3f79e080}
                  fill="var(--fill-0, white)"
                  id="Vector_72"
                />
                <path
                  d={svgPaths.p2c2d6d00}
                  fill="var(--fill-0, white)"
                  id="Vector_73"
                />
                <path
                  d={svgPaths.p20ac6880}
                  fill="var(--fill-0, white)"
                  id="Vector_74"
                />
                <path
                  d={svgPaths.p3471fd80}
                  fill="var(--fill-0, white)"
                  id="Vector_75"
                />
                <path
                  d={svgPaths.p2cf65d80}
                  fill="var(--fill-0, white)"
                  id="Vector_76"
                />
                <path
                  d={svgPaths.p9191100}
                  fill="var(--fill-0, white)"
                  id="Vector_77"
                />
                <path
                  d={svgPaths.pb55fe80}
                  fill="var(--fill-0, white)"
                  id="Vector_78"
                />
                <path
                  d={svgPaths.p23a02800}
                  fill="var(--fill-0, white)"
                  id="Vector_79"
                />
                <path
                  d={svgPaths.p36e4c700}
                  fill="var(--fill-0, white)"
                  id="Vector_80"
                />
                <path
                  d={svgPaths.p3320c780}
                  fill="var(--fill-0, white)"
                  id="Vector_81"
                />
                <path
                  d={svgPaths.p201fe40}
                  fill="var(--fill-0, white)"
                  id="Vector_82"
                />
                <path
                  d={svgPaths.p48db80}
                  fill="var(--fill-0, white)"
                  id="Vector_83"
                />
                <path
                  d={svgPaths.p4227780}
                  fill="var(--fill-0, white)"
                  id="Vector_84"
                />
                <path
                  d={svgPaths.p23197831}
                  fill="var(--fill-0, white)"
                  id="Vector_85"
                />
                <path
                  d={svgPaths.p19c34980}
                  fill="var(--fill-0, white)"
                  id="Vector_86"
                />
                <path
                  d={svgPaths.p2a27ef00}
                  fill="var(--fill-0, white)"
                  id="Vector_87"
                />
                <path
                  d={svgPaths.p22909c00}
                  fill="var(--fill-0, white)"
                  id="Vector_88"
                />
                <path
                  d={svgPaths.p32e27000}
                  fill="var(--fill-0, white)"
                  id="Vector_89"
                />
                <path
                  d={svgPaths.p23929a00}
                  fill="var(--fill-0, white)"
                  id="Vector_90"
                />
                <path
                  d={svgPaths.p33e36a00}
                  fill="var(--fill-0, white)"
                  id="Vector_91"
                />
                <path
                  d={svgPaths.p1874f80}
                  fill="var(--fill-0, white)"
                  id="Vector_92"
                />
                <path
                  d={svgPaths.p371edec0}
                  fill="var(--fill-0, white)"
                  id="Vector_93"
                />
                <path
                  d={svgPaths.p382f3610}
                  fill="var(--fill-0, white)"
                  id="Vector_94"
                />
                <path
                  d={svgPaths.p2aab8d00}
                  fill="var(--fill-0, white)"
                  id="Vector_95"
                />
                <path
                  d={svgPaths.p7328f80}
                  fill="var(--fill-0, white)"
                  id="Vector_96"
                />
                <path
                  d={svgPaths.p7db8d80}
                  fill="var(--fill-0, white)"
                  id="Vector_97"
                />
                <path
                  d={svgPaths.p8602ef0}
                  fill="var(--fill-0, white)"
                  id="Vector_98"
                />
                <path
                  d={svgPaths.p2c4d7200}
                  fill="var(--fill-0, white)"
                  id="Vector_99"
                />
                <path
                  d={svgPaths.p1137a500}
                  fill="var(--fill-0, white)"
                  id="Vector_100"
                />
                <path
                  d={svgPaths.p2df98680}
                  fill="var(--fill-0, white)"
                  id="Vector_101"
                />
                <path
                  d={svgPaths.p2292ce00}
                  fill="var(--fill-0, white)"
                  id="Vector_102"
                />
                <path
                  d={svgPaths.p2ddf8580}
                  fill="var(--fill-0, white)"
                  id="Vector_103"
                />
                <path
                  d={svgPaths.p30548e00}
                  fill="var(--fill-0, white)"
                  id="Vector_104"
                />
                <path
                  d={svgPaths.p3b175200}
                  fill="var(--fill-0, white)"
                  id="Vector_105"
                />
                <path
                  d={svgPaths.p851fa00}
                  fill="var(--fill-0, white)"
                  id="Vector_106"
                />
                <path
                  d={svgPaths.p1b22cc80}
                  fill="var(--fill-0, white)"
                  id="Vector_107"
                />
                <path
                  d={svgPaths.p14eb3280}
                  fill="var(--fill-0, white)"
                  id="Vector_108"
                />
              </g>
            </svg>
          </div>
          <StyledButton
            variant="primary"
            className="content-stretch flex items-center justify-center"
            data-name="BOTON CONFIRMAR ASISTENCIA"
            onClick={() => {
              console.log(
                "Click directo en botón CONFIRMAR ASISTENCIA",
              );
              onOpenConfirmarAsistencia?.();
            }}
          >
            <div
              className="h-[9.046px] relative shrink-0 w-[148.872px]"
              data-name="Button text"
            >
              <svg
                className="absolute block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 148.872 9.04596"
              >
                <g id="Button text">
                  <path
                    d={svgPaths.p2c09fd40}
                    fill="var(--fill-0, white)"
                    id="Vector"
                  />
                  <path
                    d={svgPaths.p7626400}
                    fill="var(--fill-0, white)"
                    id="Vector_2"
                  />
                  <path
                    d={svgPaths.pb6fbf80}
                    fill="var(--fill-0, white)"
                    id="Vector_3"
                  />
                  <path
                    d={svgPaths.p32833580}
                    fill="var(--fill-0, white)"
                    id="Vector_4"
                  />
                  <path
                    d={svgPaths.p1a498a80}
                    fill="var(--fill-0, white)"
                    id="Vector_5"
                  />
                  <path
                    d={svgPaths.p189288f0}
                    fill="var(--fill-0, white)"
                    id="Vector_6"
                  />
                  <path
                    d={svgPaths.p765070}
                    fill="var(--fill-0, white)"
                    id="Vector_7"
                  />
                  <path
                    d={svgPaths.p31381500}
                    fill="var(--fill-0, white)"
                    id="Vector_8"
                  />
                  <path
                    d={svgPaths.p24a78e00}
                    fill="var(--fill-0, white)"
                    id="Vector_9"
                  />
                  <path
                    d={svgPaths.p1e4aba00}
                    fill="var(--fill-0, white)"
                    id="Vector_10"
                  />
                  <path
                    d={svgPaths.p1f962000}
                    fill="var(--fill-0, white)"
                    id="Vector_11"
                  />
                  <path
                    d={svgPaths.p2008d870}
                    fill="var(--fill-0, white)"
                    id="Vector_12"
                  />
                  <path
                    d={svgPaths.p1e3350b0}
                    fill="var(--fill-0, white)"
                    id="Vector_13"
                  />
                  <path
                    d={svgPaths.p2f312dc0}
                    fill="var(--fill-0, white)"
                    id="Vector_14"
                  />
                  <path
                    d={svgPaths.p3e01e832}
                    fill="var(--fill-0, white)"
                    id="Vector_15"
                  />
                  <path
                    d={svgPaths.p2906a180}
                    fill="var(--fill-0, white)"
                    id="Vector_16"
                  />
                  <path
                    d={svgPaths.p1c5c3100}
                    fill="var(--fill-0, white)"
                    id="Vector_17"
                  />
                  <path
                    d={svgPaths.p29a1180}
                    fill="var(--fill-0, white)"
                    id="Vector_18"
                  />
                  <path
                    d={svgPaths.pa4cd000}
                    fill="var(--fill-0, white)"
                    id="Vector_19"
                  />
                </g>
              </svg>
            </div>
          </StyledButton>
        </div>
        {pagaTarjeta && (
          <div
            className="absolute content-stretch flex flex-col gap-[24.328px] items-center left-[117.43px] top-[3014.94px] w-[142.146px]"
            data-name="SECCION TARJETA"
          >
            <div
              className="content-stretch flex flex-col gap-[5.213px] items-center relative shrink-0 w-full"
              data-name="TEXTO"
            >
              <div
                className="h-[19.254px] relative shrink-0 w-[92.785px]"
                data-name="Section title"
              >
                <svg
                  className="absolute block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 92.7855 19.2543"
                >
                  <g id="Section title">
                    <path
                      d={svgPaths.pd78f580}
                      fill="var(--fill-0, white)"
                      id="Vector"
                    />
                    <path
                      d={svgPaths.p1a3f4d80}
                      fill="var(--fill-0, white)"
                      id="Vector_2"
                    />
                    <path
                      d={svgPaths.p10356580}
                      fill="var(--fill-0, white)"
                      id="Vector_3"
                    />
                    <path
                      d={svgPaths.p307a0c00}
                      fill="var(--fill-0, white)"
                      id="Vector_4"
                    />
                    <path
                      d={svgPaths.p22b46d00}
                      fill="var(--fill-0, white)"
                      id="Vector_5"
                    />
                    <path
                      d={svgPaths.p3a174780}
                      fill="var(--fill-0, white)"
                      id="Vector_6"
                    />
                    <path
                      d={svgPaths.p2298e00}
                      fill="var(--fill-0, white)"
                      id="Vector_7"
                    />
                  </g>
                </svg>
              </div>
              <div
                className="h-[25.333px] relative shrink-0 w-[140.46px]"
                data-name="Gift value"
                style={{ paddingTop: "8px" }}
              >
                <svg
                  className="absolute block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 140.461 22.3332"
                >
                  <g id="Gift value">
                    <path
                      d={svgPaths.p27585600}
                      fill="var(--fill-0, white)"
                      id="Vector"
                    />
                    <path
                      d={svgPaths.p1bde4700}
                      fill="var(--fill-0, white)"
                      id="Vector_2"
                    />
                    <path
                      d={svgPaths.p3dfde600}
                      fill="var(--fill-0, white)"
                      id="Vector_3"
                    />
                    <path
                      d={svgPaths.p30054210}
                      fill="var(--fill-0, white)"
                      id="Vector_4"
                    />
                    <path
                      d={svgPaths.pbea1800}
                      fill="var(--fill-0, white)"
                      id="Vector_5"
                    />
                    <path
                      d={svgPaths.p2b467200}
                      fill="var(--fill-0, white)"
                      id="Vector_6"
                    />
                    <path
                      d={svgPaths.p1686b600}
                      fill="var(--fill-0, white)"
                      id="Vector_7"
                    />
                    <path
                      d={svgPaths.p1ebaa200}
                      fill="var(--fill-0, white)"
                      id="Vector_8"
                    />
                    <path
                      d={svgPaths.p33982500}
                      fill="var(--fill-0, white)"
                      id="Vector_9"
                    />
                    <path
                      d={svgPaths.p2619dc00}
                      fill="var(--fill-0, white)"
                      id="Vector_10"
                    />
                    <path
                      d={svgPaths.p11c8c000}
                      fill="var(--fill-0, white)"
                      id="Vector_11"
                    />
                    <path
                      d={svgPaths.p222f7f80}
                      fill="var(--fill-0, white)"
                      id="Vector_12"
                    />
                    <path
                      d={svgPaths.p3da80400}
                      fill="var(--fill-0, white)"
                      id="Vector_13"
                    />
                  </g>
                </svg>
              </div>
            </div>
            <StyledButton
              variant="primary"
              className="content-stretch flex items-center justify-center"
              data-name="BOTON MAS INFO"
              onClick={() => {
                console.log(
                  "Click directo en botón MAS INFO 1 (Tarjeta)",
                );
                onOpenMasInfo1?.();
              }}
            >
              <div
                className="h-[11.548px] relative shrink-0 w-[115.949px]"
                data-name="Button text"
              >
                <svg
                  className="absolute block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 115.949 11.5482"
                >
                  <g id="Button text">
                    <path
                      d={svgPaths.p18d8bc40}
                      fill="var(--fill-0, white)"
                      id="Vector"
                    />
                    <path
                      d={svgPaths.p14dae380}
                      fill="var(--fill-0, white)"
                      id="Vector_2"
                    />
                    <path
                      d={svgPaths.p4dc6680}
                      fill="var(--fill-0, white)"
                      id="Vector_3"
                    />
                    <path
                      d={svgPaths.p1d7b8700}
                      fill="var(--fill-0, white)"
                      id="Vector_4"
                    />
                    <path
                      d={svgPaths.p37680b00}
                      fill="var(--fill-0, white)"
                      id="Vector_5"
                    />
                    <path
                      d={svgPaths.p17661e00}
                      fill="var(--fill-0, white)"
                      id="Vector_6"
                    />
                    <path
                      d={svgPaths.p39398600}
                      fill="var(--fill-0, white)"
                      id="Vector_7"
                    />
                    <path
                      d={svgPaths.p24ec4100}
                      fill="var(--fill-0, white)"
                      id="Vector_8"
                    />
                    <path
                      d={svgPaths.p34248200}
                      fill="var(--fill-0, white)"
                      id="Vector_9"
                    />
                    <path
                      d={svgPaths.p5afa900}
                      fill="var(--fill-0, white)"
                      id="Vector_10"
                    />
                    <path
                      d={svgPaths.p2e3bd00}
                      fill="var(--fill-0, white)"
                      id="Vector_11"
                    />
                    <path
                      d={svgPaths.p1fb94f80}
                      fill="var(--fill-0, white)"
                      id="Vector_12"
                    />
                    <path
                      d={svgPaths.p18cbb700}
                      fill="var(--fill-0, white)"
                      id="Vector_13"
                    />
                    <path
                      d={svgPaths.p924d500}
                      fill="var(--fill-0, white)"
                      id="Vector_14"
                    />
                  </g>
                </svg>
              </div>
            </StyledButton>
          </div>
        )}
        <div className="absolute flex h-[90px] items-center justify-center left-0 top-[2703px] w-[114px]">
          <div className="flex-none rotate-180">
            <div
              className="h-[90px] relative w-[114px]"
              data-name="EUCALIPTO"
            >
              <img
                alt=""
                className="absolute block max-w-none size-full"
                height="90"
                src={imgEucalipto1}
                width="114"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute contents left-[-0.35px] top-0"
        data-name="SECCION INICIO"
      >
        <div
          className="absolute h-[356.928px] left-[-0.35px] opacity-50 top-[319.74px] w-[376.043px]"
          data-name="TEXTURA PAPEL"
        >
          <img
            alt=""
            className="absolute block max-w-none size-full"
            height="356.928"
            src={imgTexturaPapel3}
            width="376.043"
          />
        </div>
        <div
          className="absolute contents left-[-0.35px] top-0"
          data-name="FOTO INICIO"
        >
          <div
            className="absolute contents left-[-0.35px] top-0"
            data-name="Photo Frame"
          >
            <div
              className="absolute h-[367.469px] left-[-0.35px] top-0 w-[376.043px]"
              data-name="PUT YOUR PHOTO HERE"
            >
              <img
                alt=""
                className="absolute block max-w-none size-full"
                height="367.469"
                src={imgPutYourPhotoHere}
                width="376.043"
              />
            </div>
          </div>
        </div>
        <div
          className="absolute h-[125.928px] left-[74.81px] top-[417.88px] w-[251.449px]"
          data-name="LULI Y SANTI"
        >
          <svg
            className="absolute block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 251.449 125.928"
          >
            <g id="LULI Y SANTI">
              <g id="Name">
                <path
                  d={svgPaths.p3a222c00}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector"
                />
                <path
                  d={svgPaths.p21505600}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_2"
                />
                <path
                  d={svgPaths.p26d0b80}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_3"
                />
                <path
                  d={svgPaths.p1378b700}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_4"
                />
              </g>
              <g id="Name_2">
                <path
                  d={svgPaths.pfbd4600}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_5"
                />
                <path
                  d={svgPaths.p16c4d900}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_6"
                />
                <path
                  d={svgPaths.p1ebb2f00}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_7"
                />
                <path
                  d={svgPaths.p52f700}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_8"
                />
              </g>
              <path
                d={svgPaths.p1cdddb80}
                fill="var(--fill-0, #2C3C1A)"
                id="Name_3"
              />
            </g>
          </svg>
        </div>
        <div
          className="-translate-x-1/2 absolute h-[11.417px] left-[calc(50%+0.07px)] top-[567.38px] w-[130.897px]"
          data-name="Event date"
        >
          <svg
            className="absolute block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 130.897 11.4168"
          >
            <g id="Event date">
              <path
                d={svgPaths.p249a9280}
                fill="var(--fill-0, #938F38)"
                id="Vector"
              />
              <path
                d={svgPaths.p8c48200}
                fill="var(--fill-0, #938F38)"
                id="Vector_2"
              />
              <path
                d={svgPaths.p23d18c0}
                fill="var(--fill-0, #938F38)"
                id="Vector_3"
              />
              <path
                d={svgPaths.p7921780}
                fill="var(--fill-0, #938F38)"
                id="Vector_4"
              />
              <path
                d={svgPaths.p1d88bcf0}
                fill="var(--fill-0, #938F38)"
                id="Vector_5"
              />
              <path
                d={svgPaths.p1d84d000}
                fill="var(--fill-0, #938F38)"
                id="Vector_6"
              />
              <path
                d={svgPaths.pc155600}
                fill="var(--fill-0, #938F38)"
                id="Vector_7"
              />
              <path
                d={svgPaths.p2c9600}
                fill="var(--fill-0, #938F38)"
                id="Vector_8"
              />
              <path
                d={svgPaths.p208a2800}
                fill="var(--fill-0, #938F38)"
                id="Vector_9"
              />
              <path
                d={svgPaths.p1076be80}
                fill="var(--fill-0, #938F38)"
                id="Vector_10"
              />
            </g>
          </svg>
        </div>
        <div
          className="absolute contents left-[-0.35px] top-[1083.29px]"
          data-name="SECCION HISTORIA"
        >
          <div
            className="absolute h-[518.536px] left-[-0.35px] opacity-50 top-[1272.71px] w-[377.78px]"
            data-name="TEXTURA PAPEL"
          >
            <img
              alt=""
              className="absolute block max-w-none size-full"
              height="518.536"
              src={imgTexturaPapel4}
              width="377.78"
            />
          </div>
          <div
            className="absolute h-[189.411px] left-[-0.35px] top-[1083.29px] w-[375.695px]"
            data-name="FOTO PLAYA"
          >
            <img
              alt=""
              className="absolute block max-w-none size-full"
              height="189.411"
              src={imgFotoPlaya}
              width="375.695"
            />
          </div>
          <div
            className="-translate-x-1/2 absolute h-[25.617px] left-[calc(50%-0.67px)] top-[1417.32px] w-[210.44px]"
            data-name="Section description"
          >
            <svg
              className="absolute block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 210.44 25.6167"
            >
              <g id="Section description">
                <path
                  d={svgPaths.p3fff6e00}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector"
                />
                <path
                  d={svgPaths.p139ea200}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_2"
                />
                <path
                  d={svgPaths.p26cc3300}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_3"
                />
                <path
                  d={svgPaths.p2f19b700}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_4"
                />
                <path
                  d={svgPaths.p3cbd5d80}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_5"
                />
                <path
                  d={svgPaths.p153e3872}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_6"
                />
                <path
                  d={svgPaths.p34cc2a00}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_7"
                />
                <path
                  d={svgPaths.p2fc23980}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_8"
                />
                <path
                  d={svgPaths.p692b5f0}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_9"
                />
                <path
                  d={svgPaths.p2c3f5700}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_10"
                />
                <path
                  d={svgPaths.p857c770}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_11"
                />
                <path
                  d={svgPaths.pcd6fc00}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_12"
                />
                <path
                  d={svgPaths.p4cc8f80}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_13"
                />
                <path
                  d={svgPaths.p10e78900}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_14"
                />
                <path
                  d={svgPaths.p8764200}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_15"
                />
                <path
                  d={svgPaths.p335d2a00}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_16"
                />
                <path
                  d={svgPaths.p19e59f00}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_17"
                />
                <path
                  d={svgPaths.p16b4f7f0}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_18"
                />
                <path
                  d={svgPaths.p17531d00}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_19"
                />
                <path
                  d={svgPaths.p1cdfa600}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_20"
                />
                <path
                  d={svgPaths.pb6c8340}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_21"
                />
                <path
                  d={svgPaths.p2d652a00}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_22"
                />
                <path
                  d={svgPaths.p7eb3c80}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_23"
                />
                <path
                  d={svgPaths.p390b600}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_24"
                />
                <path
                  d={svgPaths.p20ebf80}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_25"
                />
                <path
                  d={svgPaths.p387b4c00}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_26"
                />
                <path
                  d={svgPaths.p1336dfc0}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_27"
                />
                <path
                  d={svgPaths.p25382e80}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_28"
                />
                <path
                  d={svgPaths.p11735200}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_29"
                />
                <path
                  d={svgPaths.p1d956b80}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_30"
                />
                <path
                  d={svgPaths.p3bf8d940}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_31"
                />
                <path
                  d={svgPaths.p14e0be00}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_32"
                />
                <path
                  d={svgPaths.p298e900}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_33"
                />
                <path
                  d={svgPaths.pd983f00}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_34"
                />
                <path
                  d={svgPaths.p52cc100}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_35"
                />
                <path
                  d={svgPaths.p9c3b180}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_36"
                />
                <path
                  d={svgPaths.p2978fe00}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_37"
                />
                <path
                  d={svgPaths.pa948ac0}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_38"
                />
                <path
                  d={svgPaths.p231ee700}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_39"
                />
                <path
                  d={svgPaths.p2f56300}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_40"
                />
                <path
                  d={svgPaths.p2d813000}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_41"
                />
                <path
                  d={svgPaths.pbe0a800}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_42"
                />
                <path
                  d={svgPaths.p36bd9200}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_43"
                />
                <path
                  d={svgPaths.p212db680}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_44"
                />
                <path
                  d={svgPaths.p311e26c0}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_45"
                />
                <path
                  d={svgPaths.p11a69680}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_46"
                />
                <path
                  d={svgPaths.p1f1fea00}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_47"
                />
                <path
                  d={svgPaths.p2c60d880}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_48"
                />
                <path
                  d={svgPaths.p24ffebf0}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_49"
                />
                <path
                  d={svgPaths.p35779400}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_50"
                />
                <path
                  d={svgPaths.p1137300}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_51"
                />
                <path
                  d={svgPaths.p3900ac70}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_52"
                />
                <path
                  d={svgPaths.p2f0e2b00}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_53"
                />
                <path
                  d={svgPaths.p2c7f3d00}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_54"
                />
                <path
                  d={svgPaths.p22b88a70}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_55"
                />
                <path
                  d={svgPaths.p13229f00}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_56"
                />
                <path
                  d={svgPaths.pc010700}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_57"
                />
                <path
                  d={svgPaths.p18b6c400}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_58"
                />
                <path
                  d={svgPaths.pe85a280}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_59"
                />
                <path
                  d={svgPaths.p3188f100}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_60"
                />
                <path
                  d={svgPaths.pcc55c00}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_61"
                />
                <path
                  d={svgPaths.p28744800}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_62"
                />
                <path
                  d={svgPaths.pc9b8a80}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_63"
                />
                <path
                  d={svgPaths.p39e0b300}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_64"
                />
              </g>
            </svg>
          </div>
          <div
            className="absolute h-[68.137px] left-[30.97px] top-[1661.68px] w-[161.009px]"
            data-name="FRASE AMOR"
          >
            <svg
              className="absolute block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 161.009 68.1369"
            >
              <g id="FRASE AMOR">
                <g id="Quote">
                  <path
                    d={svgPaths.p25c63c40}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector"
                  />
                  <path
                    d={svgPaths.p9faf700}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_2"
                  />
                  <path
                    d={svgPaths.p2e5e4700}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_3"
                  />
                  <path
                    d={svgPaths.p1b0c4500}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_4"
                  />
                  <path
                    d={svgPaths.pf465030}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_5"
                  />
                  <path
                    d={svgPaths.pca8d700}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_6"
                  />
                  <path
                    d={svgPaths.p114be300}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_7"
                  />
                  <path
                    d={svgPaths.p1ee758f0}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_8"
                  />
                  <path
                    d={svgPaths.p709a200}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_9"
                  />
                  <path
                    d={svgPaths.p103c7500}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_10"
                  />
                  <path
                    d={svgPaths.p1a5dc6a0}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_11"
                  />
                  <path
                    d={svgPaths.p2c278b00}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_12"
                  />
                  <path
                    d={svgPaths.p3bc30200}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_13"
                  />
                  <path
                    d={svgPaths.p3d34cf40}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_14"
                  />
                  <path
                    d={svgPaths.p1780c900}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_15"
                  />
                  <path
                    d={svgPaths.p39a189f0}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_16"
                  />
                  <path
                    d={svgPaths.p335ecc00}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_17"
                  />
                  <path
                    d={svgPaths.p1582cd00}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_18"
                  />
                  <path
                    d={svgPaths.p4146500}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_19"
                  />
                  <path
                    d={svgPaths.p33068f00}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_20"
                  />
                  <path
                    d={svgPaths.p851e840}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_21"
                  />
                  <path
                    d={svgPaths.p3714eb00}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_22"
                  />
                  <path
                    d={svgPaths.p187efc80}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_23"
                  />
                  <path
                    d={svgPaths.p30feb700}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_24"
                  />
                  <path
                    d={svgPaths.p1ffd1980}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_25"
                  />
                  <path
                    d={svgPaths.p19457600}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_26"
                  />
                  <path
                    d={svgPaths.p280a84f0}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_27"
                  />
                  <path
                    d={svgPaths.p2636e00}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_28"
                  />
                  <path
                    d={svgPaths.p24a0cb80}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_29"
                  />
                  <path
                    d={svgPaths.p1accd600}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_30"
                  />
                  <path
                    d={svgPaths.p1b65fc00}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_31"
                  />
                  <path
                    d={svgPaths.pa9a0800}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_32"
                  />
                  <path
                    d={svgPaths.pa84a500}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_33"
                  />
                  <path
                    d={svgPaths.p27cc0f00}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_34"
                  />
                  <path
                    d={svgPaths.p19da0980}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_35"
                  />
                  <path
                    d={svgPaths.pdc34600}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_36"
                  />
                  <path
                    d={svgPaths.p29c6c00}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_37"
                  />
                  <path
                    d={svgPaths.p2904af00}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_38"
                  />
                  <path
                    d={svgPaths.p2c478100}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_39"
                  />
                  <path
                    d={svgPaths.p2ddd3200}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_40"
                  />
                  <path
                    d={svgPaths.p239c3940}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_41"
                  />
                  <path
                    d={svgPaths.pcfac600}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_42"
                  />
                  <path
                    d={svgPaths.p3ff57f00}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_43"
                  />
                  <path
                    d={svgPaths.p13e9ee00}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_44"
                  />
                  <path
                    d={svgPaths.p34f21c00}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_45"
                  />
                  <path
                    d={svgPaths.p1f872300}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_46"
                  />
                  <path
                    d={svgPaths.p5f1c180}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_47"
                  />
                  <path
                    d={svgPaths.p3c1f35f1}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_48"
                  />
                  <path
                    d={svgPaths.p1ee54100}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_49"
                  />
                  <path
                    d={svgPaths.p2deffd80}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_50"
                  />
                  <path
                    d={svgPaths.p1f06fb00}
                    fill="var(--fill-0, #2C3C1A)"
                    id="Vector_51"
                  />
                </g>
                <path
                  d={svgPaths.p1430d380}
                  fill="var(--fill-0, #938F38)"
                  id="Vector 13 (Stroke)"
                  style={{ transform: "translate(20px, -3px)" }}
                />
              </g>
            </svg>
          </div>
          <div
            className="absolute contents left-[42.05px] top-[1213.97px]"
            data-name="MARCO"
          >
            <div
              className="absolute flex h-[158.658px] items-center justify-center left-[50.39px] top-[1222.31px] w-[128.578px]"
              style={
                {
                  "--transform-inner-width": "1200",
                  "--transform-inner-height": "154",
                } as React.CSSProperties
              }
            >
              <div className="flex-none rotate-[-4.05deg]">
                <div
                  className="h-[150.692px] relative w-[118.242px]"
                  data-name="IMG_6959_Original 1"
                >
                  <img
                    alt=""
                    className="absolute block max-w-none size-full"
                    height="150.692"
                    src={imgImg6959Original1}
                    width="118.242"
                  />
                </div>
              </div>
            </div>
            <div className="absolute flex inset-[21.28%_50.07%_75.65%_11.2%] items-center justify-center">
              <div className="flex-none h-[165.431px] rotate-[-4.26deg] w-[133.457px]">
                <div
                  className="relative size-full"
                  data-name="Vector"
                >
                  <svg
                    className="absolute block size-full"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 133.457 165.431"
                  >
                    <path
                      clipRule="evenodd"
                      d={svgPaths.p15749ff2}
                      fill="var(--fill-0, #E0DFCA)"
                      fillRule="evenodd"
                      id="Vector"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div
            className="absolute contents h-[223.494px] left-[206px] top-[1542.1px] w-[171.254px]"
            data-name="MARCO LARGO"
          >
            <div
              className="absolute flex h-[174.113px] items-center justify-center left-[234.83px] top-[1567.29px] w-[113.053px]"
              style={
                {
                  "--transform-inner-width": "1200",
                  "--transform-inner-height": "169",
                } as React.CSSProperties
              }
            >
              <div className="flex-none rotate-[5.28deg]">
                <div
                  className="h-[165.773px] relative w-[98.203px]"
                  data-name="D53B1ADE-A74F-4475-99D2-E64D3CAFB653 1"
                >
                  <img
                    alt=""
                    className="absolute block max-w-none size-full"
                    height="165.773"
                    src={imgD53B1AdeA74F447599D2E64D3Cafb6531}
                    width="98.203"
                  />
                </div>
              </div>
            </div>
            <div
              className="absolute inset-[27.25%_4.35%_69.26%_59.74%]"
              data-name="Vector"
            >
              <svg
                className="absolute block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 134.796 198.77"
              >
                <g id="Vector">
                  <path
                    d={svgPaths.p81a0500}
                    fill="var(--fill-0, #938F38)"
                  />
                  <path
                    d={svgPaths.p29869600}
                    fill="var(--fill-0, #938F38)"
                  />
                  <path
                    d={svgPaths.p476d280}
                    fill="var(--fill-0, #938F38)"
                  />
                </g>
              </svg>
            </div>
          </div>
          <div
            className="absolute contents left-[204.47px] top-[1287.59px]"
            data-name="MARCO 1"
          >
            <div
              className="absolute flex h-[98.183px] items-center justify-center left-[213.43px] top-[1294.08px] w-[116.996px]"
              style={
                {
                  "--transform-inner-width": "1200",
                  "--transform-inner-height": "97",
                } as React.CSSProperties
              }
            >
              <div className="flex-none rotate-[2.5deg]">
                <div
                  className="h-[93.334px] relative w-[113.026px]"
                  data-name="GPTempDownload 29 1"
                >
                  <img
                    alt=""
                    className="absolute block max-w-none size-full"
                    height="93.334"
                    src={imgGpTempDownload291}
                    width="113.026"
                  />
                </div>
              </div>
            </div>
            <div
              className="absolute inset-[22.58%_9.76%_75.44%_54.47%]"
              data-name="Vector"
            >
              <svg
                className="absolute block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 134.246 112.992"
              >
                <g id="Vector">
                  <path
                    d={svgPaths.p3d698600}
                    fill="var(--fill-0, #E5E2CF)"
                  />
                  <path
                    d={svgPaths.ped7d800}
                    fill="var(--fill-0, #E5E2CF)"
                  />
                </g>
              </svg>
            </div>
          </div>
          <div
            className="absolute contents left-[37.4px] top-[1488.04px]"
            data-name="MARCO 2"
          >
            <div
              className="absolute flex h-[113.921px] items-center justify-center left-[46.65px] top-[1498.08px] w-[136.605px]"
              style={
                {
                  "--transform-inner-width": "1200",
                  "--transform-inner-height": "110",
                } as React.CSSProperties
              }
            >
              <div className="flex-none rotate-[-3.29deg]">
                <div
                  className="h-[106.597px] relative w-[130.704px]"
                  data-name="IMG_0832 1"
                >
                  <img
                    alt=""
                    className="absolute block max-w-none size-full"
                    height="106.597"
                    src={imgImg08321}
                    width="130.704"
                  />
                </div>
              </div>
            </div>
            <div
              className="absolute inset-[26.09%_49.02%_71.58%_9.96%]"
              data-name="Vector"
            >
              <svg
                className="absolute block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 153.967 132.699"
              >
                <g id="Vector">
                  <path
                    d={svgPaths.p3a00e580}
                    fill="var(--fill-0, #E5E2CF)"
                  />
                  <path
                    d={svgPaths.p3cea68f0}
                    fill="var(--fill-0, #E5E2CF)"
                  />
                </g>
              </svg>
            </div>
          </div>
          <div
            className="absolute inset-[24.94%_6.13%_72.89%_58.46%]"
            data-name="MAPITAS"
          >
            <svg
              className="absolute block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 132.927 123.609"
            >
              <g id="MAPITAS">
                <g id="MAPITA">
                  <path d={svgPaths.p268c1680} fill="#938F38" />
                  <path d={svgPaths.p2c50f480} fill="#938F38" />
                  <path
                    d={svgPaths.pd277080}
                    fill="var(--fill-0, #2C3C1A)"
                  />
                  <path
                    d={svgPaths.p18f2d700}
                    fill="var(--fill-0, #2C3C1A)"
                  />
                  <path
                    d={svgPaths.p2986d800}
                    fill="var(--fill-0, #2C3C1A)"
                  />
                </g>
              </g>
            </svg>
          </div>
        </div>
        <div
          className="absolute contents left-[-0.35px] top-[676.67px]"
          data-name="SECCION NOS CASAMOS"
        >
          <div
            className="absolute h-[173.077px] left-[-0.35px] opacity-50 top-[910.22px] w-[375.695px]"
            data-name="TEXTURA PAPEL"
          >
            <img
              alt=""
              className="absolute block max-w-none size-full"
              height="173.077"
              src={imgTexturaPapel5}
              width="375.695"
            />
          </div>
          <div
            className="absolute h-[233.55px] left-[-0.35px] top-[676.67px] w-[375.348px]"
            data-name="FONDO"
          >
            <svg
              className="absolute block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 375.348 233.55"
            >
              <path
                d="M0 0H375.348V233.55H0V0Z"
                fill="var(--fill-0, #2C3C1A)"
                id="FONDO"
              />
            </svg>
          </div>
          <div
            className="absolute h-[47.029px] left-[28.37px] top-[811.15px] w-[95.708px]"
            data-name="Section description"
          >
            <svg
              className="absolute block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 95.7077 47.0288"
            >
              <g id="Section description">
                <path
                  d={svgPaths.p2aae2f00}
                  fill="var(--fill-0, white)"
                  id="Vector"
                />
                <path
                  d={svgPaths.p1bfba1a0}
                  fill="var(--fill-0, white)"
                  id="Vector_2"
                />
                <path
                  d={svgPaths.p1e69ca80}
                  fill="var(--fill-0, white)"
                  id="Vector_3"
                />
                <path
                  d={svgPaths.p42a500}
                  fill="var(--fill-0, white)"
                  id="Vector_4"
                />
                <path
                  d={svgPaths.p17ca4ef0}
                  fill="var(--fill-0, white)"
                  id="Vector_5"
                />
                <path
                  d={svgPaths.p1a004400}
                  fill="var(--fill-0, white)"
                  id="Vector_6"
                />
                <path
                  d={svgPaths.p3b45e780}
                  fill="var(--fill-0, white)"
                  id="Vector_7"
                />
                <path
                  d={svgPaths.p21011c80}
                  fill="var(--fill-0, white)"
                  id="Vector_8"
                />
                <path
                  d={svgPaths.p3519c580}
                  fill="var(--fill-0, white)"
                  id="Vector_9"
                />
                <path
                  d={svgPaths.p2ca30900}
                  fill="var(--fill-0, white)"
                  id="Vector_10"
                />
                <path
                  d={svgPaths.p1b5bc200}
                  fill="var(--fill-0, white)"
                  id="Vector_11"
                />
                <path
                  d={svgPaths.p36ec6300}
                  fill="var(--fill-0, white)"
                  id="Vector_12"
                />
                <path
                  d={svgPaths.p2bf95cc0}
                  fill="var(--fill-0, white)"
                  id="Vector_13"
                />
                <path
                  d={svgPaths.p2fe73cc0}
                  fill="var(--fill-0, white)"
                  id="Vector_14"
                />
                <path
                  d={svgPaths.p2fb1c1f0}
                  fill="var(--fill-0, white)"
                  id="Vector_15"
                />
                <path
                  d={svgPaths.p432100}
                  fill="var(--fill-0, white)"
                  id="Vector_16"
                />
                <path
                  d={svgPaths.p2bf5f9f0}
                  fill="var(--fill-0, white)"
                  id="Vector_17"
                />
                <path
                  d={svgPaths.p5988880}
                  fill="var(--fill-0, white)"
                  id="Vector_18"
                />
                <path
                  d={svgPaths.p1d7fb200}
                  fill="var(--fill-0, white)"
                  id="Vector_19"
                />
                <path
                  d={svgPaths.p21ac8700}
                  fill="var(--fill-0, white)"
                  id="Vector_20"
                />
                <path
                  d={svgPaths.p363288f0}
                  fill="var(--fill-0, white)"
                  id="Vector_21"
                />
                <path
                  d={svgPaths.p3bc5600}
                  fill="var(--fill-0, white)"
                  id="Vector_22"
                />
                <path
                  d={svgPaths.p3dfa7c00}
                  fill="var(--fill-0, white)"
                  id="Vector_23"
                />
                <path
                  d={svgPaths.p3024b300}
                  fill="var(--fill-0, white)"
                  id="Vector_24"
                />
                <path
                  d={svgPaths.p261c3500}
                  fill="var(--fill-0, white)"
                  id="Vector_25"
                />
                <path
                  d={svgPaths.p6170100}
                  fill="var(--fill-0, white)"
                  id="Vector_26"
                />
                <path
                  d={svgPaths.p249ae400}
                  fill="var(--fill-0, white)"
                  id="Vector_27"
                />
                <path
                  d={svgPaths.p11746400}
                  fill="var(--fill-0, white)"
                  id="Vector_28"
                />
                <path
                  d={svgPaths.pb786880}
                  fill="var(--fill-0, white)"
                  id="Vector_29"
                />
                <path
                  d={svgPaths.p2a6e1500}
                  fill="var(--fill-0, white)"
                  id="Vector_30"
                />
                <path
                  d={svgPaths.p17819d80}
                  fill="var(--fill-0, white)"
                  id="Vector_31"
                />
                <path
                  d={svgPaths.p2acf8880}
                  fill="var(--fill-0, white)"
                  id="Vector_32"
                />
              </g>
            </svg>
          </div>
          <div
            className="absolute content-stretch flex flex-col gap-[10px] items-center left-[96.62px] top-[715.25px] w-[181.418px]"
            data-name="NOS CASAMOS"
          >
            <div
              className="h-[19.551px] relative shrink-0 w-[158.811px]"
              data-name="Section title"
            >
              <svg
                className="absolute block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 158.811 19.5515"
              >
                <g id="Section title">
                  <path
                    d={svgPaths.p37ed1100}
                    fill="var(--fill-0, white)"
                    id="Vector"
                  />
                  <path
                    d={svgPaths.p7c51800}
                    fill="var(--fill-0, white)"
                    id="Vector_2"
                  />
                  <path
                    d={svgPaths.p3d5caf80}
                    fill="var(--fill-0, white)"
                    id="Vector_3"
                  />
                  <path
                    d={svgPaths.p33323d70}
                    fill="var(--fill-0, white)"
                    id="Vector_4"
                  />
                  <path
                    d={svgPaths.p24ee0400}
                    fill="var(--fill-0, white)"
                    id="Vector_5"
                  />
                  <path
                    d={svgPaths.p13aa41f0}
                    fill="var(--fill-0, white)"
                    id="Vector_6"
                  />
                  <path
                    d={svgPaths.p3234e80}
                    fill="var(--fill-0, white)"
                    id="Vector_7"
                  />
                  <path
                    d={svgPaths.p2a2ca100}
                    fill="var(--fill-0, white)"
                    id="Vector_8"
                  />
                  <path
                    d={svgPaths.p1bbaa300}
                    fill="var(--fill-0, white)"
                    id="Vector_9"
                  />
                  <path
                    d={svgPaths.p1db3b2f0}
                    fill="var(--fill-0, white)"
                    id="Vector_10"
                  />
                </g>
              </svg>
            </div>
            <div
              className="h-[12.303px] relative shrink-0 w-[180.831px]"
              data-name="Section container"
            >
              <svg
                className="absolute block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 180.831 12.3033"
              >
                <g id="Section container">
                  <path
                    d={svgPaths.ped1d580}
                    fill="var(--fill-0, #938F38)"
                    id="Vector 9 (Stroke)"
                  />
                  <g id="Section description">
                    <path
                      d={svgPaths.pd540d80}
                      fill="var(--fill-0, white)"
                      id="Vector"
                    />
                    <path
                      d={svgPaths.p24527680}
                      fill="var(--fill-0, white)"
                      id="Vector_2"
                    />
                    <path
                      d={svgPaths.p360b8200}
                      fill="var(--fill-0, white)"
                      id="Vector_3"
                    />
                    <path
                      d={svgPaths.p20319100}
                      fill="var(--fill-0, white)"
                      id="Vector_4"
                    />
                    <path
                      d={svgPaths.pc44b900}
                      fill="var(--fill-0, white)"
                      id="Vector_5"
                    />
                    <path
                      d={svgPaths.p2d1c4b00}
                      fill="var(--fill-0, white)"
                      id="Vector_6"
                    />
                    <path
                      d={svgPaths.p14335cf0}
                      fill="var(--fill-0, white)"
                      id="Vector_7"
                    />
                    <path
                      d={svgPaths.pacde00}
                      fill="var(--fill-0, white)"
                      id="Vector_8"
                    />
                    <path
                      d={svgPaths.pe566e00}
                      fill="var(--fill-0, white)"
                      id="Vector_9"
                    />
                    <path
                      d={svgPaths.p1cbf1230}
                      fill="var(--fill-0, white)"
                      id="Vector_10"
                    />
                    <path
                      d={svgPaths.p28768800}
                      fill="var(--fill-0, white)"
                      id="Vector_11"
                    />
                    <path
                      d={svgPaths.p1643df00}
                      fill="var(--fill-0, white)"
                      id="Vector_12"
                    />
                    <path
                      d={svgPaths.p3c5a4a00}
                      fill="var(--fill-0, white)"
                      id="Vector_13"
                    />
                    <path
                      d={svgPaths.p2c8e0100}
                      fill="var(--fill-0, white)"
                      id="Vector_14"
                    />
                    <path
                      d={svgPaths.p2fd0c000}
                      fill="var(--fill-0, white)"
                      id="Vector_15"
                    />
                    <path
                      d={svgPaths.p23403380}
                      fill="var(--fill-0, white)"
                      id="Vector_16"
                    />
                    <path
                      d={svgPaths.pbf00a00}
                      fill="var(--fill-0, white)"
                      id="Vector_17"
                    />
                    <path
                      d={svgPaths.p24c84c00}
                      fill="var(--fill-0, white)"
                      id="Vector_18"
                    />
                    <path
                      d={svgPaths.p2019a600}
                      fill="var(--fill-0, white)"
                      id="Vector_19"
                    />
                    <path
                      d={svgPaths.p3a99f400}
                      fill="var(--fill-0, white)"
                      id="Vector_20"
                    />
                    <path
                      d={svgPaths.p559e080}
                      fill="var(--fill-0, white)"
                      id="Vector_21"
                    />
                    <path
                      d={svgPaths.p20c1b580}
                      fill="var(--fill-0, white)"
                      id="Vector_22"
                    />
                    <path
                      d={svgPaths.p788d900}
                      fill="var(--fill-0, white)"
                      id="Vector_23"
                    />
                    <path
                      d={svgPaths.p8003f0}
                      fill="var(--fill-0, white)"
                      id="Vector_24"
                    />
                    <path
                      d={svgPaths.p288929f0}
                      fill="var(--fill-0, white)"
                      id="Vector_25"
                    />
                    <path
                      d={svgPaths.p371a4200}
                      fill="var(--fill-0, white)"
                      id="Vector_26"
                    />
                  </g>
                </g>
              </svg>
            </div>
          </div>
          <div
            className="absolute h-[4.726px] left-[86.21px] top-[821.8px] w-[36.459px]"
            data-name="Vector 10 (Stroke)"
          >
            <svg
              className="absolute block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 36.4585 4.72643"
            >
              <path
                d={svgPaths.p2c9c9e00}
                fill="var(--fill-0, #C4C295)"
                id="Vector 10 (Stroke)"
              />
            </svg>
          </div>
          <div
            className="absolute h-[20.797px] left-[109.46px] top-[824.96px] w-[23.864px]"
            data-name="Vector 11 (Stroke)"
          >
            <svg
              className="absolute block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 23.8645 20.7973"
            >
              <path
                d={svgPaths.p292fb000}
                fill="var(--fill-0, #C4C295)"
                id="Vector 11 (Stroke)"
              />
            </svg>
          </div>
          <div
            className="-translate-x-1/2 absolute contents h-[180.749px] left-[calc(50%+4.99px)] top-[794.14px] w-[152.47px]"
            data-name="FOTO CASAMIENTO LULA PEDRO"
          >
            <div
              className="absolute flex h-[159.605px] items-center justify-center left-[126.25px] top-[806px] w-[133.969px]"
              style={
                {
                  "--transform-inner-width": "1200",
                  "--transform-inner-height": "151",
                } as React.CSSProperties
              }
            >
              <div className="flex-none rotate-[6.62deg]">
                <div
                  className="h-[147.011px] relative w-[117.817px]"
                  data-name="IMG_20220227_025036 1"
                >
                  <img
                    alt=""
                    className="absolute block max-w-none size-full"
                    height="147.011"
                    src={imgImg202202270250361}
                    width="117.817"
                  />
                </div>
              </div>
            </div>
            <div className="absolute flex inset-[13.93%_28.47%_82.92%_31.13%] items-center justify-center">
              <div className="flex-none h-[165.431px] rotate-[6.62deg] w-[133.457px]">
                <div
                  className="relative size-full"
                  data-name="Vector"
                >
                  <svg
                    className="absolute block size-full"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 133.457 165.431"
                  >
                    <path
                      clipRule="evenodd"
                      d={svgPaths.p15749ff2}
                      fill="var(--fill-0, #938F38)"
                      fillRule="evenodd"
                      id="Vector"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div
            className="-translate-x-1/2 absolute h-[37.123px] left-[calc(50%+0.1px)] top-[1005.36px] w-[211.828px]"
            data-name="Section description"
          >
            <svg
              className="absolute block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 245.828 37.123"
            >
              <g id="Section description">
                <path
                  d={svgPaths.p3c73e300}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector"
                />
                <path
                  d={svgPaths.p6aac780}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_2"
                />
                <path
                  d={svgPaths.p26dc5580}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_3"
                />
                <path
                  d={svgPaths.p11a01d80}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_4"
                />
                <path
                  d={svgPaths.paa96580}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_5"
                />
                <path
                  d={svgPaths.p34cb35f0}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_6"
                />
                <path
                  d={svgPaths.p239f4600}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_7"
                />
                <path
                  d={svgPaths.p3f9eda00}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_8"
                />
                <path
                  d={svgPaths.p3a1ba600}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_9"
                />
                <path
                  d={svgPaths.p2f4e680}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_10"
                />
                <path
                  d={svgPaths.p32f77d00}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_11"
                />
                <path
                  d={svgPaths.p3a9fae40}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_12"
                />
                <path
                  d={svgPaths.p24c54c00}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_13"
                />
                <path
                  d={svgPaths.p2dce7d00}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_14"
                />
                <path
                  d={svgPaths.p18e42ff0}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_15"
                />
                <path
                  d={svgPaths.p6563000}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_16"
                />
                <path
                  d={svgPaths.p290a5f00}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_17"
                />
                <path
                  d={svgPaths.p329c58a0}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_18"
                />
                <path
                  d={svgPaths.p23481e00}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_19"
                />
                <path
                  d={svgPaths.p15017100}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_20"
                />
                <path
                  d={svgPaths.p3a390980}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_21"
                />
                <path
                  d={svgPaths.pbb48380}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_22"
                />
                <path
                  d={svgPaths.p1c34dc00}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_23"
                />
                <path
                  d={svgPaths.p7b75180}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_24"
                />
                <path
                  d={svgPaths.p36b77100}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_25"
                />
                <path
                  d={svgPaths.p3ac9ab00}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_26"
                />
                <path
                  d={svgPaths.p32a25d00}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_27"
                />
                <path
                  d={svgPaths.p3e22b300}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_28"
                />
                <path
                  d={svgPaths.p2eb04c00}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_29"
                />
                <path
                  d={svgPaths.p359a3a80}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_30"
                />
                <path
                  d={svgPaths.p2bde1600}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_31"
                />
                <path
                  d={svgPaths.p1918c100}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_32"
                />
                <path
                  d={svgPaths.paeb6700}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_33"
                />
                <path
                  d={svgPaths.p46fea00}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_34"
                />
                <path
                  d={svgPaths.p7bfac00}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_35"
                />
                <path
                  d={svgPaths.p1a8f1300}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_36"
                />
                <path
                  d={svgPaths.p2d98b100}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_37"
                />
                <path
                  d={svgPaths.p119d0600}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_38"
                />
                <path
                  d={svgPaths.p33d2af00}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_39"
                />
                <path
                  d={svgPaths.p3a9c7000}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_40"
                />
                <path
                  d={svgPaths.p2f645b80}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_41"
                />
                <path
                  d={svgPaths.p224a0d10}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_42"
                />
                <path
                  d={svgPaths.p1dea2f80}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_43"
                />
                <path
                  d={svgPaths.p204e2f80}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_44"
                />
                <path
                  d={svgPaths.pb424880}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_45"
                />
                <path
                  d={svgPaths.p92f9410}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_46"
                />
                <path
                  d={svgPaths.p262f6e00}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_47"
                />
                <path
                  d={svgPaths.p75bb980}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_48"
                />
                <path
                  d={svgPaths.p50494f0}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_49"
                />
                <path
                  d={svgPaths.p3d5f7580}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_50"
                />
                <path
                  d={svgPaths.p3b00ba80}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_51"
                />
                <path
                  d={svgPaths.p3e7b4fa0}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_52"
                />
                <path
                  d={svgPaths.p2b144000}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_53"
                />
                <path
                  d={svgPaths.p24e68a00}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_54"
                />
                <path
                  d={svgPaths.p22a38900}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_55"
                />
                <path
                  d={svgPaths.p78a2100}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_56"
                />
                <path
                  d={svgPaths.p1c1e4100}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_57"
                />
                <path
                  d={svgPaths.p8a89680}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_58"
                />
                <path
                  d={svgPaths.p28e49d40}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_59"
                />
                <path
                  d={svgPaths.p47f4280}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_60"
                />
                <path
                  d={svgPaths.p8227a80}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_61"
                />
                <path
                  d={svgPaths.p2a2b5f00}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_62"
                />
                <path
                  d={svgPaths.p1fc86200}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_63"
                />
                <path
                  d={svgPaths.p3557a380}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_64"
                />
                <path
                  d={svgPaths.p3d99c100}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_65"
                />
                <path
                  d={svgPaths.p23b54f00}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_66"
                />
                <path
                  d={svgPaths.p34790400}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_67"
                />
                <path
                  d={svgPaths.p11a5f800}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_68"
                />
                <path
                  d={svgPaths.p196480}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_69"
                />
                <path
                  d={svgPaths.p7294180}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_70"
                />
                <path
                  d={svgPaths.p1dda7200}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_71"
                />
                <path
                  d={svgPaths.p3a512900}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_72"
                />
                <path
                  d={svgPaths.pe8201c0}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_73"
                />
                <path
                  d={svgPaths.p2ae79e80}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_74"
                />
                <path
                  d={svgPaths.p28b04f00}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_75"
                />
                <path
                  d={svgPaths.p3e784900}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_76"
                />
                <path
                  d={svgPaths.p3f26db00}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_77"
                />
                <path
                  d={svgPaths.p34561070}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_78"
                />
                <path
                  d={svgPaths.p19812220}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_79"
                />
                <path
                  d={svgPaths.p82c7c80}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_80"
                />
                <path
                  d={svgPaths.p3b240680}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_81"
                />
                <path
                  d={svgPaths.p13311780}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_82"
                />
                <path
                  d={svgPaths.p22b6cc70}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_83"
                />
                <path
                  d={svgPaths.p1740da80}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_84"
                />
                <path
                  d={svgPaths.p42d6400}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_85"
                />
                <path
                  d={svgPaths.p6de9500}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_86"
                />
                <path
                  d={svgPaths.p407f600}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_87"
                />
                <path
                  d={svgPaths.p394ba100}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_88"
                />
                <path
                  d={svgPaths.p35e24200}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_89"
                />
                <path
                  d={svgPaths.p2cc74400}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_90"
                />
                <path
                  d={svgPaths.p3761870}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_91"
                />
                <path
                  d={svgPaths.p209ad000}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_92"
                />
                <path
                  d={svgPaths.p35cb72f0}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_93"
                />
                <path
                  d={svgPaths.p18f71800}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_94"
                />
                <path
                  d={svgPaths.p1e3b280}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_95"
                />
                <path
                  d={svgPaths.p2416fe70}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_96"
                />
                <path
                  d={svgPaths.p6af2900}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_97"
                />
                <path
                  d={svgPaths.pa42f080}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_98"
                />
                <path
                  d={svgPaths.pab88f00}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_99"
                />
                <path
                  d={svgPaths.p213f0900}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_100"
                />
                <path
                  d={svgPaths.p19254e00}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_101"
                />
                <path
                  d={svgPaths.p147b2e80}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_102"
                />
                <path
                  d={svgPaths.p3953ff00}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_103"
                />
                <path
                  d={svgPaths.p15884a80}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_104"
                />
                <path
                  d={svgPaths.p17d7c00}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_105"
                />
                <path
                  d={svgPaths.pec76740}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_106"
                />
                <path
                  d={svgPaths.p26bfc100}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_107"
                />
                <path
                  d={svgPaths.p3746d480}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_108"
                />
                <path
                  d={svgPaths.p8293380}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_109"
                />
                <path
                  d={svgPaths.p733c500}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_110"
                />
                <path
                  d={svgPaths.p24050600}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_111"
                />
                <path
                  d={svgPaths.p2f7b5200}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_112"
                />
                <path
                  d={svgPaths.p15b7580}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_113"
                />
                <path
                  d={svgPaths.p1743f500}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_114"
                />
                <path
                  d={svgPaths.p1e02e500}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_115"
                />
                <path
                  d={svgPaths.p17d74180}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_116"
                />
              </g>
            </svg>
          </div>
          <div
            className="absolute flex h-[66.297px] items-center justify-center left-[273.52px] top-[819.51px] w-[66.883px]"
            style={
              {
                "--transform-inner-width": "1200",
                "--transform-inner-height": "19",
              } as React.CSSProperties
            }
          >
            <div className="flex-none rotate-[-8.07deg]">
              <div
                className="h-[58.558px] relative w-[59.246px]"
                data-name="ESTAMPILLA"
              >
                <svg
                  className="absolute block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 59.2465 58.5576"
                >
                  <g
                    clipPath="url(#clip0_2004_5929)"
                    id="ESTAMPILLA"
                  >
                    <g id="Vector">
                      <path
                        d={svgPaths.p1b8edc00}
                        fill="var(--fill-0, white)"
                      />
                      <path
                        d={svgPaths.p10cd4a00}
                        fill="var(--fill-0, white)"
                      />
                      <path
                        d={svgPaths.p2f86b580}
                        fill="var(--fill-0, white)"
                      />
                      <path
                        d={svgPaths.p2a6a70f0}
                        fill="var(--fill-0, white)"
                      />
                      <path
                        d={svgPaths.p1d24000}
                        fill="var(--fill-0, white)"
                      />
                      <path
                        d={svgPaths.pe698400}
                        fill="var(--fill-0, white)"
                      />
                      <path
                        d={svgPaths.p3c8e9500}
                        fill="var(--fill-0, white)"
                      />
                      <path
                        d={svgPaths.p139cc900}
                        fill="var(--fill-0, white)"
                      />
                      <path
                        d={svgPaths.p2c439200}
                        fill="var(--fill-0, white)"
                      />
                      <path
                        d={svgPaths.pf676d70}
                        fill="var(--fill-0, white)"
                      />
                      <path
                        d={svgPaths.p37f9d1d0}
                        fill="var(--fill-0, white)"
                      />
                      <path
                        d={svgPaths.p2c51fd00}
                        fill="var(--fill-0, white)"
                      />
                      <path
                        d={svgPaths.p33c42000}
                        fill="var(--fill-0, white)"
                      />
                      <path
                        d={svgPaths.p149e8100}
                        fill="var(--fill-0, white)"
                      />
                      <path
                        d={svgPaths.p3bfe31a0}
                        fill="var(--fill-0, white)"
                      />
                      <path
                        d={svgPaths.p30590a80}
                        fill="var(--fill-0, white)"
                      />
                      <path
                        d={svgPaths.p111ede00}
                        fill="var(--fill-0, white)"
                      />
                      <path
                        d={svgPaths.pb423b80}
                        fill="var(--fill-0, white)"
                      />
                      <path
                        d={svgPaths.p1af47600}
                        fill="var(--fill-0, white)"
                      />
                      <path
                        d={svgPaths.p1c7b3f80}
                        fill="var(--fill-0, white)"
                      />
                      <path
                        d={svgPaths.p2e693680}
                        fill="var(--fill-0, white)"
                      />
                      <path
                        d={svgPaths.p1183c7f0}
                        fill="var(--fill-0, white)"
                      />
                      <path
                        d={svgPaths.pdd35a00}
                        fill="var(--fill-0, white)"
                      />
                      <path
                        d={svgPaths.p11b9c800}
                        fill="var(--fill-0, white)"
                      />
                      <path
                        d={svgPaths.p15b76c00}
                        fill="var(--fill-0, white)"
                      />
                      <path
                        d={svgPaths.p316b4d00}
                        fill="var(--fill-0, white)"
                      />
                      <path
                        d={svgPaths.p3dffe500}
                        fill="var(--fill-0, white)"
                      />
                      <path
                        d={svgPaths.p23a1ad40}
                        fill="var(--fill-0, white)"
                      />
                      <path
                        d={svgPaths.p2ebd7e00}
                        fill="var(--fill-0, white)"
                      />
                      <path
                        d={svgPaths.p37115100}
                        fill="var(--fill-0, white)"
                      />
                      <path
                        d={svgPaths.p3c306600}
                        fill="var(--fill-0, white)"
                      />
                      <path
                        d={svgPaths.pd36af00}
                        fill="var(--fill-0, white)"
                      />
                      <path
                        d={svgPaths.p30630380}
                        fill="var(--fill-0, white)"
                      />
                      <path
                        d={svgPaths.p10c89e00}
                        fill="var(--fill-0, white)"
                      />
                      <path
                        d={svgPaths.p30812e70}
                        fill="var(--fill-0, white)"
                      />
                      <path
                        d={svgPaths.p1cceaa00}
                        fill="var(--fill-0, white)"
                      />
                      <path
                        d={svgPaths.p2c143800}
                        fill="var(--fill-0, white)"
                      />
                      <path
                        d={svgPaths.p2a004100}
                        fill="var(--fill-0, white)"
                      />
                      <path
                        d={svgPaths.p38f7b200}
                        fill="var(--fill-0, white)"
                      />
                      <path
                        d={svgPaths.p2eeff700}
                        fill="var(--fill-0, white)"
                      />
                      <path
                        d={svgPaths.p2f20ba00}
                        fill="var(--fill-0, white)"
                      />
                      <path
                        d={svgPaths.p4167600}
                        fill="var(--fill-0, white)"
                      />
                      <path
                        d={svgPaths.p386fdf80}
                        fill="var(--fill-0, white)"
                      />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_2004_5929">
                      <rect
                        fill="white"
                        height="58.5576"
                        width="59.2465"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
          <div
            className="absolute flex h-[82.971px] items-center justify-center left-[24.69px] top-[914.25px] w-[108.798px]"
            style={
              {
                "--transform-inner-width": "1200",
                "--transform-inner-height": "19",
              } as React.CSSProperties
            }
          >
            <div className="flex-none rotate-[-5.97deg]">
              <div
                className="h-[72.784px] relative w-[101.782px]"
                data-name="ESTAMPILLA 2"
              >
                <svg
                  className="absolute block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 101.782 72.7837"
                >
                  <g id="ESTAMPILLA 2">
                    <g id="Vector">
                      <path
                        d={svgPaths.p3b0e400}
                        fill="white"
                      />
                      <path
                        d={svgPaths.p28e13800}
                        fill="var(--fill-0, #E0E0CC)"
                      />
                      <path
                        d={svgPaths.p3c4d43c0}
                        fill="var(--fill-0, #E0E0CC)"
                      />
                      <path
                        d={svgPaths.p17ceb900}
                        fill="var(--fill-0, #E0E0CC)"
                      />
                      <path
                        d={svgPaths.p388b780}
                        fill="var(--fill-0, #E0E0CC)"
                      />
                      <path
                        d={svgPaths.p1cf16640}
                        fill="var(--fill-0, #E0E0CC)"
                      />
                      <path
                        d={svgPaths.p2dc05900}
                        fill="var(--fill-0, #E0E0CC)"
                      />
                      <path
                        d={svgPaths.p454a940}
                        fill="var(--fill-0, #E0E0CC)"
                      />
                      <path
                        d={svgPaths.p18885f80}
                        fill="var(--fill-0, #E0E0CC)"
                      />
                      <path
                        d={svgPaths.p1628c500}
                        fill="var(--fill-0, #E0E0CC)"
                      />
                      <path
                        d={svgPaths.p17590400}
                        fill="var(--fill-0, #E0E0CC)"
                      />
                      <path
                        d={svgPaths.p1a738b00}
                        fill="var(--fill-0, #E0E0CC)"
                      />
                      <path
                        d={svgPaths.p1d92df00}
                        fill="var(--fill-0, #E0E0CC)"
                      />
                      <path
                        d={svgPaths.p1bfca380}
                        fill="var(--fill-0, #E0E0CC)"
                      />
                      <path
                        d={svgPaths.p17b25600}
                        fill="var(--fill-0, #E0E0CC)"
                      />
                      <path
                        d={svgPaths.pf2d2d80}
                        fill="var(--fill-0, #E0E0CC)"
                      />
                      <path
                        d={svgPaths.p2d7ca30}
                        fill="var(--fill-0, #E0E0CC)"
                      />
                      <path
                        d={svgPaths.p399a9d00}
                        fill="var(--fill-0, #E0E0CC)"
                      />
                      <path
                        d={svgPaths.p16102080}
                        fill="var(--fill-0, #E0E0CC)"
                      />
                      <path
                        d={svgPaths.p2960fd00}
                        fill="var(--fill-0, #E0E0CC)"
                      />
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute h-[83.076px] right-[-0.65px] top-[597.07px] w-[113.952px]"
          data-name="EUCALIPTO"
        >
          <img
            alt=""
            className="absolute block max-w-none size-full"
            height="83.076"
            src={imgEucalipto2}
            width="113.952"
          />
        </div>
        <div className="absolute flex h-[72px] items-center justify-center left-0 top-[333.57px] w-[98.758px]">
          <div className="flex-none rotate-180">
            <div
              className="h-[72px] relative w-[98.758px]"
              data-name="EUCALIPTO"
            >
              <img
                alt=""
                className="absolute block max-w-none size-full"
                height="72"
                src={imgEucalipto3}
                width="98.758"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute contents left-[-0.69px] top-[3214.78px]"
        data-name="SECCION REGALO"
      >
        <div
          className="absolute h-[291.242px] left-[-0.69px] opacity-50 top-[3214.78px] w-[375.695px]"
          data-name="TEXTURA PAPEL"
        >
          <img
            alt=""
            className="absolute block max-w-none size-full"
            height="291.242"
            src={imgTexturaPapel6}
            width="375.695"
          />
        </div>
        <div
          className="absolute h-[67.592px] left-[89.16px] top-[3323.11px] w-[195.563px]"
          data-name="Section description"
        >
          <svg
            className="absolute block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 195.563 67.5923"
          >
            <g id="Section description">
              <path
                d={svgPaths.p21f58500}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector"
              />
              <path
                d={svgPaths.p3575ea00}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_2"
              />
              <path
                d={svgPaths.p3dff5980}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_3"
              />
              <path
                d={svgPaths.p9390580}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_4"
              />
              <path
                d={svgPaths.pb14900}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_5"
              />
              <path
                d={svgPaths.pcfe8d00}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_6"
              />
              <path
                d={svgPaths.p3109d900}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_7"
              />
              <path
                d={svgPaths.p32e38580}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_8"
              />
              <path
                d={svgPaths.p38e22100}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_9"
              />
              <path
                d={svgPaths.p37dd0980}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_10"
              />
              <path
                d={svgPaths.p173d200}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_11"
              />
              <path
                d={svgPaths.p11d4cf80}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_12"
              />
              <path
                d={svgPaths.p3f078200}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_13"
              />
              <path
                d={svgPaths.p2a522e80}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_14"
              />
              <path
                d={svgPaths.p241e400}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_15"
              />
              <path
                d={svgPaths.p26c4ad00}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_16"
              />
              <path
                d={svgPaths.p1aa580}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_17"
              />
              <path
                d={svgPaths.pefaa900}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_18"
              />
              <path
                d={svgPaths.p1d4eda00}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_19"
              />
              <path
                d={svgPaths.p2995bb00}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_20"
              />
              <path
                d={svgPaths.p13c12a00}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_21"
              />
              <path
                d={svgPaths.p188ea940}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_22"
              />
              <path
                d={svgPaths.p18144af0}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_23"
              />
              <path
                d={svgPaths.p38281800}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_24"
              />
              <path
                d={svgPaths.p19aa16f0}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_25"
              />
              <path
                d={svgPaths.p1988dac0}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_26"
              />
              <path
                d={svgPaths.p10667e00}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_27"
              />
              <path
                d={svgPaths.p2c351100}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_28"
              />
              <path
                d={svgPaths.p1e52c9c0}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_29"
              />
              <path
                d={svgPaths.p36d46640}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_30"
              />
              <path
                d={svgPaths.p2e1c5d00}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_31"
              />
              <path
                d={svgPaths.p3ff53980}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_32"
              />
              <path
                d={svgPaths.p384c6000}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_33"
              />
              <path
                d={svgPaths.p968da00}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_34"
              />
              <path
                d={svgPaths.p35fe1a00}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_35"
              />
              <path
                d={svgPaths.p3c3f5000}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_36"
              />
              <path
                d={svgPaths.p71aad00}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_37"
              />
              <path
                d={svgPaths.p27955580}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_38"
              />
              <path
                d={svgPaths.p31a46800}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_39"
              />
              <path
                d={svgPaths.pad80000}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_40"
              />
              <path
                d={svgPaths.p2c624400}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_41"
              />
              <path
                d={svgPaths.p16d1e100}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_42"
              />
              <path
                d={svgPaths.pba20a00}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_43"
              />
              <path
                d={svgPaths.p2e26c100}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_44"
              />
              <path
                d={svgPaths.pfffab00}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_45"
              />
              <path
                d={svgPaths.p10300a00}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_46"
              />
              <path
                d={svgPaths.p17e12800}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_47"
              />
              <path
                d={svgPaths.p1ba6ad00}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_48"
              />
              <path
                d={svgPaths.p24bc0380}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_49"
              />
              <path
                d={svgPaths.p1aec4d80}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_50"
              />
              <path
                d={svgPaths.p210b6c00}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_51"
              />
              <path
                d={svgPaths.p299e7300}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_52"
              />
              <path
                d={svgPaths.p1698e800}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_53"
              />
              <path
                d={svgPaths.p3d37000}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_54"
              />
              <path
                d={svgPaths.p20576880}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_55"
              />
              <path
                d={svgPaths.p700b3f0}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_56"
              />
              <path
                d={svgPaths.p38baa100}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_57"
              />
              <path
                d={svgPaths.p28204400}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_58"
              />
              <path
                d={svgPaths.p11a42b00}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_59"
              />
              <path
                d={svgPaths.pa1edb00}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_60"
              />
              <path
                d={svgPaths.p15933b00}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_61"
              />
              <path
                d={svgPaths.pc311000}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_62"
              />
              <path
                d={svgPaths.p1eeca100}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_63"
              />
              <path
                d={svgPaths.p11b77800}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_64"
              />
              <path
                d={svgPaths.p1634d00}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_65"
              />
              <path
                d={svgPaths.p2a92d600}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_66"
              />
              <path
                d={svgPaths.p316f4700}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_67"
              />
              <path
                d={svgPaths.pbb78700}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_68"
              />
              <path
                d={svgPaths.p23391b80}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_69"
              />
              <path
                d={svgPaths.p23561c00}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_70"
              />
              <path
                d={svgPaths.p18372c30}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_71"
              />
              <path
                d={svgPaths.p1b987b80}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_72"
              />
              <path
                d={svgPaths.p336aff80}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_73"
              />
              <path
                d={svgPaths.p1e6c2400}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_74"
              />
              <path
                d={svgPaths.p39090e00}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_75"
              />
              <path
                d={svgPaths.p2ff8f200}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_76"
              />
              <path
                d={svgPaths.p3a30cf80}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_77"
              />
              <path
                d={svgPaths.p264d2e00}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_78"
              />
              <path
                d={svgPaths.p36a38780}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_79"
              />
              <path
                d={svgPaths.p2cd1c980}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_80"
              />
              <path
                d={svgPaths.p37589900}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_81"
              />
              <path
                d={svgPaths.p3d04b680}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_82"
              />
              <path
                d={svgPaths.p32c6f200}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_83"
              />
              <path
                d={svgPaths.p44a1b00}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_84"
              />
              <path
                d={svgPaths.p15f09880}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_85"
              />
              <path
                d={svgPaths.p2d6d5700}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_86"
              />
              <path
                d={svgPaths.p1cc359f0}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_87"
              />
              <path
                d={svgPaths.p374c5000}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_88"
              />
              <path
                d={svgPaths.p18474f0}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_89"
              />
              <path
                d={svgPaths.p2c942a80}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_90"
              />
              <path
                d={svgPaths.p536000}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_91"
              />
              <path
                d={svgPaths.p129a64f0}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_92"
              />
              <path
                d={svgPaths.p10a02d00}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_93"
              />
              <path
                d={svgPaths.p13de30c0}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_94"
              />
              <path
                d={svgPaths.p98b300}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_95"
              />
              <path
                d={svgPaths.p27aa8700}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_96"
              />
              <path
                d={svgPaths.p3c887c00}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_97"
              />
              <path
                d={svgPaths.p39069600}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_98"
              />
              <path
                d={svgPaths.p13aef800}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_99"
              />
              <path
                d={svgPaths.p12e1df00}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_100"
              />
              <path
                d={svgPaths.pc215d00}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_101"
              />
              <path
                d={svgPaths.p2ea3ac00}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_102"
              />
              <path
                d={svgPaths.p3ac9c500}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_103"
              />
              <path
                d={svgPaths.p261d6800}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_104"
              />
              <path
                d={svgPaths.p18f4cf00}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_105"
              />
              <path
                d={svgPaths.p1c544400}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_106"
              />
              <path
                d={svgPaths.pf90d840}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_107"
              />
              <path
                d={svgPaths.p23c8bd00}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_108"
              />
              <path
                d={svgPaths.p2ebedc00}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_109"
              />
              <path
                d={svgPaths.p34f8800}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_110"
              />
            </g>
          </svg>
        </div>
        <StyledButton
          variant="primary"
          className="absolute left-[117.9px] top-[3413.58px]"
          data-name="BOTON MAS INFO"
          onClick={() => {
            console.log(
              "Click directo en botón MAS INFO 2 (Regalo)",
            );
            onOpenMasInfo2?.();
          }}
        >
          <div
            className="h-[11.548px] relative shrink-0 w-[115.949px]"
            data-name="Button text"
          >
            <svg
              className="absolute block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 115.949 11.5482"
            >
              <g id="Button text">
                <path
                  d={svgPaths.p19dcbe00}
                  fill="var(--fill-0, white)"
                  id="Vector"
                />
                <path
                  d={svgPaths.pbcd3500}
                  fill="var(--fill-0, white)"
                  id="Vector_2"
                />
                <path
                  d={svgPaths.p12904800}
                  fill="var(--fill-0, white)"
                  id="Vector_3"
                />
                <path
                  d={svgPaths.p13d24900}
                  fill="var(--fill-0, white)"
                  id="Vector_4"
                />
                <path
                  d={svgPaths.p6726400}
                  fill="var(--fill-0, white)"
                  id="Vector_5"
                />
                <path
                  d={svgPaths.p34438e00}
                  fill="var(--fill-0, white)"
                  id="Vector_6"
                />
                <path
                  d={svgPaths.p220de000}
                  fill="var(--fill-0, white)"
                  id="Vector_7"
                />
                <path
                  d={svgPaths.p302a4f00}
                  fill="var(--fill-0, white)"
                  id="Vector_8"
                />
                <path
                  d={svgPaths.p399d4380}
                  fill="var(--fill-0, white)"
                  id="Vector_9"
                />
                <path
                  d={svgPaths.p1d9b6e00}
                  fill="var(--fill-0, white)"
                  id="Vector_10"
                />
                <path
                  d={svgPaths.p3c8c0080}
                  fill="var(--fill-0, white)"
                  id="Vector_11"
                />
                <path
                  d={svgPaths.p3e065500}
                  fill="var(--fill-0, white)"
                  id="Vector_12"
                />
                <path
                  d={svgPaths.p2658cf80}
                  fill="var(--fill-0, white)"
                  id="Vector_13"
                />
                <path
                  d={svgPaths.pd3b9100}
                  fill="var(--fill-0, white)"
                  id="Vector_14"
                />
              </g>
            </svg>
          </div>
        </StyledButton>
        <div className="absolute flex inset-[59.69%_76.73%_38.92%_6.02%] items-center justify-center">
          <div className="flex-none h-[70.97px] rotate-[-9.73deg] w-[53.522px]">
            <div
              className="relative size-full"
              data-name="REGALO ICONO"
            >
              <svg
                className="absolute block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 53.5218 70.9695"
              >
                <g id="REGALO ICONO">
                  <path
                    d={svgPaths.p351ba580}
                    fill="var(--fill-0, #938F38)"
                    id="Vector"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div
          className="absolute h-[19.618px] left-[143.36px] top-[3270.08px] w-[87.889px]"
          data-name="Section title"
        >
          <svg
            className="absolute block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 87.8889 19.6182"
          >
            <g id="Section title">
              <path
                d={svgPaths.p1ad9ed00}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector"
              />
              <path
                d={svgPaths.p526f200}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_2"
              />
              <path
                d={svgPaths.p2fcfea00}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_3"
              />
              <path
                d={svgPaths.p35e388b0}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_4"
              />
              <path
                d={svgPaths.p1da11800}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_5"
              />
              <path
                d={svgPaths.p2c3e4000}
                fill="var(--fill-0, #2C3C1A)"
                id="Vector_6"
              />
            </g>
          </svg>
        </div>
      </div>
      <div
        className="absolute contents left-[-0.7px] top-[4682.11px]"
        data-name="SECCION CUENTA REGRESIVA"
      >
        <div className="absolute flex h-[445.551px] items-center justify-center left-[-0.69px] top-[4682.11px] w-[375.695px]">
          <div className="flex-none rotate-180">
            <div
              className="h-[445.551px] opacity-50 relative w-[375.695px]"
              data-name="TEXTURA PAPEL"
            >
              <img
                alt=""
                className="absolute block max-w-none size-full"
                height="445.551"
                src={imgTexturaPapel7}
                width="375.695"
              />
            </div>
          </div>
        </div>
        <div
          className="absolute contents left-[-0.7px] top-[5044.14px]"
          data-name="FOTO FINAL"
        >
          <div
            className="absolute contents left-[-0.7px] top-[5044.14px]"
            data-name="Photo Frame"
          >
            <div className="absolute flex h-[367.469px] items-center justify-center left-[-0.7px] top-[5044.14px] w-[376.043px]">
              <div className="flex-none rotate-180">
                <div
                  className="h-[367.469px] relative w-[376.043px]"
                  data-name="PUT YOUR PHOTO HERE"
                >
                  <img
                    alt=""
                    className="absolute block max-w-none size-full"
                    height="367.469"
                    src={imgPutYourPhotoHere1}
                    width="376.043"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute h-[125.928px] left-[75.18px] top-[4875.13px] w-[251.449px]"
          data-name="LULI Y SANTI"
        >
          <svg
            className="absolute block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 251.449 125.928"
          >
            <g id="LULI Y SANTI">
              <g id="Name">
                <path
                  d={svgPaths.p1b6535f0}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector"
                />
                <path
                  d={svgPaths.p286da880}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_2"
                />
                <path
                  d={svgPaths.p6259280}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_3"
                />
                <path
                  d={svgPaths.p1562f80}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_4"
                />
              </g>
              <g id="Name_2">
                <path
                  d={svgPaths.p30ddb270}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_5"
                />
                <path
                  d={svgPaths.p2598bf00}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_6"
                />
                <path
                  d={svgPaths.p38b71a30}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_7"
                />
                <path
                  d={svgPaths.p2f9f0f00}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_8"
                />
              </g>
              <path
                d={svgPaths.p36acb300}
                fill="var(--fill-0, #2C3C1A)"
                id="Name_3"
              />
            </g>
          </svg>
        </div>
        <div
          className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[6.951px] items-center left-[calc(50%-0.44px)] top-[4709.92px] w-[166.474px]"
          data-name="NOS VEMOS EN"
        >
          <div
            className="h-[11.416px] relative shrink-0 w-[130.897px]"
            data-name="Event date"
          >
            <svg
              className="absolute block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 130.897 11.417"
            >
              <g id="Event date">
                <path
                  d={svgPaths.p512f580}
                  fill="var(--fill-0, #938F38)"
                  id="Vector"
                />
                <path
                  d={svgPaths.p7ecc900}
                  fill="var(--fill-0, #938F38)"
                  id="Vector_2"
                />
                <path
                  d={svgPaths.p1f1a5f80}
                  fill="var(--fill-0, #938F38)"
                  id="Vector_3"
                />
                <path
                  d={svgPaths.p1221300}
                  fill="var(--fill-0, #938F38)"
                  id="Vector_4"
                />
                <path
                  d={svgPaths.p228e2000}
                  fill="var(--fill-0, #938F38)"
                  id="Vector_5"
                />
                <path
                  d={svgPaths.p3f6ab00}
                  fill="var(--fill-0, #938F38)"
                  id="Vector_6"
                />
                <path
                  d={svgPaths.p204e5700}
                  fill="var(--fill-0, #938F38)"
                  id="Vector_7"
                />
                <path
                  d={svgPaths.p29a33600}
                  fill="var(--fill-0, #938F38)"
                  id="Vector_8"
                />
                <path
                  d={svgPaths.p2748800}
                  fill="var(--fill-0, #938F38)"
                  id="Vector_9"
                />
                <path
                  d={svgPaths.p1518e400}
                  fill="var(--fill-0, #938F38)"
                  id="Vector_10"
                />
              </g>
            </svg>
          </div>
          <div
            className="h-[19.284px] relative shrink-0 w-[164.855px]"
            data-name="Section title"
          >
            <svg
              className="absolute block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 164.856 19.2845"
            >
              <g id="Section title">
                <path
                  d={svgPaths.p2381df00}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector"
                />
                <path
                  d={svgPaths.p3c01a880}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_2"
                />
                <path
                  d={svgPaths.p13f943a0}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_3"
                />
                <path
                  d={svgPaths.p2f421880}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_4"
                />
                <path
                  d={svgPaths.p3556ce00}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_5"
                />
                <path
                  d={svgPaths.p1ab28d00}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_6"
                />
                <path
                  d={svgPaths.p5f23200}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_7"
                />
                <path
                  d={svgPaths.p3e31bc00}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_8"
                />
                <path
                  d={svgPaths.pbef8980}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_9"
                />
                <path
                  d={svgPaths.pf9e3510}
                  fill="var(--fill-0, #2C3C1A)"
                  id="Vector_10"
                />
              </g>
            </svg>
          </div>
        </div>
        <div
          className="absolute h-[90px] right-[0.35px] top-[4992px] w-[92px] z-20"
          data-name="EUCALIPTO"
        >
          <img
            alt=""
            className="absolute block max-w-none size-full"
            height="90"
            src={imgEucalipto4}
            width="92"
          />
        </div>
        <div className="absolute flex h-[105px] items-center justify-center left-0 top-[4756px] w-[97px] z-20">
          <div className="flex-none rotate-180">
            <div
              className="h-[105px] relative w-[97px]"
              data-name="EUCALIPTO"
            >
              <img
                alt=""
                className="absolute block max-w-none size-full"
                height="105"
                src={imgEucalipto5}
                width="97"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-[20px] right-[20px] top-[4775px] h-[70px] flex items-center justify-center bg-[#E0DFCA] rounded-lg shadow-sm z-10">
        <CountdownTimer />
      </div>
    </div>
  );
}

function Frame8Mobile({
  onOpenConfirmarAsistencia,
  onOpenMasInfo1,
  onOpenMasInfo2,
  onOpenDressCode,
  pagaTarjeta,
}: {
  onOpenConfirmarAsistencia?: () => void;
  onOpenMasInfo1?: () => void;
  onOpenMasInfo2?: () => void;
  onOpenDressCode?: () => void;
  pagaTarjeta: boolean;
}) {
  return (
    <div className="bg-white relative size-full">
      <FinalPredeterminado
        className="absolute bg-white h-[5703.545px] left-1/2 -translate-x-1/2 overflow-x-clip overflow-y-auto top-0 w-[375.348px]"
        onOpenConfirmarAsistencia={onOpenConfirmarAsistencia}
        onOpenMasInfo1={onOpenMasInfo1}
        onOpenMasInfo2={onOpenMasInfo2}
        onOpenDressCode={onOpenDressCode}
        pagaTarjeta={pagaTarjeta}
      />
    </div>
  );
}

function Frame8Desktop({
  onOpenConfirmarAsistencia,
  onOpenMasInfo1,
  onOpenMasInfo2,
  onOpenDressCode,
  pagaTarjeta,
}: {
  onOpenConfirmarAsistencia?: () => void;
  onOpenMasInfo1?: () => void;
  onOpenMasInfo2?: () => void;
  onOpenDressCode?: () => void;
  pagaTarjeta: boolean;
}) {
  return (
    <div className="bg-white relative size-full">
      <FinalPredeterminado
        className="absolute bg-white h-[5703.545px] left-1/2 -translate-x-1/2 overflow-x-clip overflow-y-auto top-0 w-[375.348px]"
        onOpenConfirmarAsistencia={onOpenConfirmarAsistencia}
        onOpenMasInfo1={onOpenMasInfo1}
        onOpenMasInfo2={onOpenMasInfo2}
        onOpenDressCode={onOpenDressCode}
        pagaTarjeta={pagaTarjeta}
      />
    </div>
  );
}

function Frame() {
  const { width } = useBreakpoint();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState<InvitacionData | null>(null);

  // Estados para los modales
  const [
    isConfirmarAsistenciaOpen,
    setIsConfirmarAsistenciaOpen,
  ] = useState(false);
  const [isMasInfo1Open, setIsMasInfo1Open] = useState(false);
  const [isMasInfo2Open, setIsMasInfo2Open] = useState(false);
  const [isDressCodeOpen, setIsDressCodeOpen] = useState(false);

  // Función para actualizar los datos localmente
  const handleDataUpdate = (updatedData: InvitacionData) => {
    setData(updatedData);
  };

  useEffect(() => {
    // Obtener el ID de la URL
    const params = new URLSearchParams(window.location.search);
    let id = params.get("id");
    if (!id) id = "FAM001";
    if (!id) {
      setError(true);
      setLoading(false);
      return;
    }

    // Guardar el ID en la variable global
    setGoogleSheetId(id);

    // Hacer fetch a Google Apps Script
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${GOOGLE_APPS_SCRIPT_URL}?id=${id}`,
        );

        if (!response.ok) {
          throw new Error("Error al cargar datos");
        }

        const result = await response.json();

        // Verificar si hay error en la respuesta
        if (result.error) {
          throw new Error(result.message);
        }

        // Los datos ya vienen en el formato correcto desde Google Apps Script
        const parsedData: InvitacionData = {
          id: result.id,
          pagaTarjeta: result.pagaTarjeta,
          personas: result.personas,
        };

        setData(parsedData);
        setLoading(false);
      } catch (err) {
        console.error("Error:", err);
        setError(true);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Mostrar error si hay algún problema
  if (error) {
    return <ErrorMessage />;
  }

  // Mostrar loading mientras se cargan los datos
  if (loading) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#938F38] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-[#2C3C1A] text-lg">
            Cargando invitación...
          </p>
        </div>
      </div>
    );
  }

  // Renderizar la invitación normal
  if (width < 1280) {
    return (
      <div style={{ backgroundColor: "#FCFAF6", minHeight: "100vh", display: "flex", justifyContent: "center" }}>
        <>
          <Frame8Mobile
            onOpenConfirmarAsistencia={() => {
              console.log(
                "Click en Confirmar Asistencia - Mobile",
              );
              setIsConfirmarAsistenciaOpen(true);
            }}
            onOpenMasInfo1={() => {
              console.log(
                "Click en Más Info 1 (Tarjeta) - Mobile",
              );
              setIsMasInfo1Open(true);
            }}
            onOpenMasInfo2={() => {
              console.log(
                "Click en Más Info 2 (Regalo) - Mobile",
              );
              setIsMasInfo2Open(true);
            }}
            onOpenDressCode={() => {
              console.log("Click en Dress Code - Mobile");
              setIsDressCodeOpen(true);
              console.log(
                "Estado isDressCodeOpen después de set:",
                true,
              );
            }}
            pagaTarjeta={data!.pagaTarjeta}
          />

          {/* Modales renderizados con z-index alto para aparecer encima */}
          {isConfirmarAsistenciaOpen && (
            <ModalConfirmarAsistencia
              onClose={() => setIsConfirmarAsistenciaOpen(false)}
              data={data!}
              onDataUpdate={handleDataUpdate}
            />
          )}

          {isMasInfo1Open && (
            <ModalTarjeta
              onClose={() => setIsMasInfo1Open(false)}
            />
          )}

          {isMasInfo2Open && (
            <ModalRegalos
              onClose={() => setIsMasInfo2Open(false)}
            />
          )}

          {isDressCodeOpen &&
            (console.log(
              "Renderizando ModalDressCode - Mobile, isDressCodeOpen:",
              isDressCodeOpen,
            ),
              true) && (
              <ModalDressCode
                onClose={() => {
                  console.log("Cerrando ModalDressCode");
                  setIsDressCodeOpen(false);
                }}
              />
            )}

          {/* Botón flotante de música */}
          <FloatingMusicPlayer />
        </>
      </div>
    );
  }
  return (
    <div style={{ backgroundColor: "#FCFAF6", minHeight: "100vh", display: "flex", justifyContent: "center" }}>
      <>
        <Frame8Desktop
          onOpenConfirmarAsistencia={() => {
            console.log(
              "Click en Confirmar Asistencia - Desktop",
            );
            setIsConfirmarAsistenciaOpen(true);
          }}
          onOpenMasInfo1={() => {
            console.log(
              "Click en Más Info 1 (Tarjeta) - Desktop",
            );
            setIsMasInfo1Open(true);
          }}
          onOpenMasInfo2={() => {
            console.log("Click en Más Info 2 (Regalo) - Desktop");
            setIsMasInfo2Open(true);
          }}
          onOpenDressCode={() => {
            console.log("Click en Dress Code - Desktop");
            setIsDressCodeOpen(true);
            console.log(
              "Estado isDressCodeOpen despu��s de set:",
              true,
            );
          }}
          pagaTarjeta={data!.pagaTarjeta}
        />

        {/* Modales renderizados con z-index alto para aparecer encima */}
        {isConfirmarAsistenciaOpen && (
          <ModalConfirmarAsistencia
            onClose={() => setIsConfirmarAsistenciaOpen(false)}
            data={data!}
            onDataUpdate={handleDataUpdate}
          />
        )}

        {isMasInfo1Open && (
          <ModalTarjeta
            onClose={() => setIsMasInfo1Open(false)}
          />
        )}

        {isMasInfo2Open && (
          <ModalRegalos
            onClose={() => setIsMasInfo2Open(false)}
          />
        )}

        {isDressCodeOpen &&
          (console.log(
            "Renderizando ModalDressCode - Desktop, isDressCodeOpen:",
            isDressCodeOpen,
          ),
            true) && (
            <ModalDressCode
              onClose={() => {
                console.log("Cerrando ModalDressCode");
                setIsDressCodeOpen(false);
              }}
            />
          )}

        {/* Botón flotante de música */}
        <FloatingMusicPlayer />
      </>
    </div>
  );
}

export default Frame;
