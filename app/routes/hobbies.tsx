import { useContext, useEffect, useState } from "react"
import modpacks from "~/assets/hobbies/minecraft-modpacks"
import ScrollContext, { ScrollContextProvider } from "~/context/scroll"

const bannerFlatmap = modpacks.map((pack) => pack.banner)
const proofFlatmap = modpacks.reduce(
  (list: string[], pack) => list.concat(...pack.proofs),
  []
)

const MinecraftModpacks = () => {
  const [banner, setBanner] = useState(bannerFlatmap[0])
  const [pack, setPack] = useState(modpacks[0])
  const [proof, setProof] = useState(proofFlatmap[0])
  const scroll = useContext(ScrollContext)

  useEffect(() => {
    const index = Math.floor(scroll.y / 100)
    if (proofFlatmap[index] !== undefined) setProof(proofFlatmap[index])

    if (index <= 13) {
      setBanner(bannerFlatmap[0])
      setPack(modpacks[0])
    } else if (index <= 16) {
      setBanner(bannerFlatmap[1])
      setPack(modpacks[1])
    } else if (index <= 19) {
      setBanner(bannerFlatmap[2])
      setPack(modpacks[2])
    }
  }, [scroll])

  return (
    <div className="h-[40in] screen-primary">
      <div
        className="
        fixed
        flex
        w-full
        min-w-[320px]
        flex-col
        items-center
        pt-40
        screen-primary
        md:pt-28
      "
      >
        <div className="mx-2 md:w-2/3 lg:w-1/2">
          <img
            src={banner}
            alt={pack.alt}
            className="max-h-[192px] max-w-full"
          />
        </div>

        <div className="mt-4 flex justify-center">
          <div
            className="
            mx-2
            rounded-2xl
            screen-secondary
            md:w-2/3
            lg:w-1/2
          "
          >
            <div>
              <div className="flex h-full w-full items-center justify-evenly p-4">
                <div>
                  <img className="w-full" src={proof} alt={pack.alt} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Hobbies() {
  return (
    <ScrollContextProvider>
      <main>
        <MinecraftModpacks />
      </main>
    </ScrollContextProvider>
  )
}
