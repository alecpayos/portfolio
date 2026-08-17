import Icons from "~/assets"

export default function Hero() {
  const { misc, versionControlIcons } = Icons

  return (
    <div
      className="
      flex
      min-h-screen
      min-w-[320px]
      flex-col
      items-center
      justify-center
      py-40
      screen-primary

      sm:py-32
      lg:flex-row
      lg:py-24
      xl:py-0
    "
    >
      <section className="flex flex-col xl:me-16">
        <h1
          className="
          mb-4
          text-center
          !text-[48px]
          text-[#efbf6b]
          screen-header
          
          xs:mb-8
          xs:px-12
          xs:!text-[64px]
          sm:mb-0
          sm:px-0
          sm:text-left
          sm:!text-6xl
        "
        >
          ALEC MARVIN PAYOS
        </h1>

        <div
          className="
          sm:w-[640px]
          sm:border-l-4
          sm:ps-4 
        "
        >
          <p className="mb-4 px-2 2xs:px-8 sm:mb-3 sm:px-0">
            I’m a software engineer based in Cebu, PH and currently am a pioneer
            of multiple dashboard projects in my current company.
          </p>
          <p className="mb-4 px-2 2xs:px-8 sm:mb-3 sm:px-0">
            Revenue generation for companies and partners have long been the
            goal-setters for each and every feature I plan and develop.
          </p>
          <p className="mb-4 px-2 2xs:px-8 sm:mb-3 sm:px-0">
            I’m passionate about seamless UI/UX, clear workflows, task planning,
            and development processes.
          </p>
          <p className="mb-4 px-2 2xs:px-8 sm:mb-0 sm:px-0">
            I take it to heart, a perfect communication to all colleagues
            especially towards the executive committee of the company.
          </p>
        </div>
      </section>

      <section
        className="
        invisible 
        mt-2
        
        3xs:visible
        2xs:mt-4
        sm:mt-12
        lg:mt-0
        lg:ms-8
        xl:ms-16
      "
      >
        <a
          className="mb-2 flex items-center hover:text-sky-500 xl:mb-4"
          href="https://linkedin.com/in/alecpayos"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={misc.linkedinIcon.icon}
            alt={misc.linkedinIcon.alt}
            className="me-6 w-8 rounded bg-white"
          />{" "}
          linkedin.com/in/alecpayos
        </a>
        <a
          className="mb-2 flex items-center hover:text-sky-500 xl:mb-4"
          href="https://github.com/alecpayos"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={versionControlIcons.githubIcon.icon}
            alt={versionControlIcons.githubIcon.alt}
            className="me-6 w-8 rounded-3xl bg-white"
          />{" "}
          github.com/alecpayos
        </a>
        <span className="mb-2 flex items-center xl:mb-4">
          <img
            src={misc.googleIcon.icon}
            alt={misc.googleIcon.alt}
            className="me-6 w-8"
          />{" "}
          alecpayos.2020@gmail.com
        </span>
        <span className="mb-2 flex items-center xl:mb-4">
          <img
            src={misc.icons8PhoneIcon.icon}
            alt={misc.icons8PhoneIcon.alt}
            className="me-6 w-8"
          />{" "}
          (+63) 917 140 7063
        </span>
        <span className="mb-2 flex items-center xl:mb-4">
          <img
            src={misc.googleMapsIcon.icon}
            alt={misc.googleMapsIcon.alt}
            className="me-6 h-8 w-8"
          />{" "}
          75 Real St. Tacloban City, Leyte
        </span>
      </section>
    </div>
  )
}
