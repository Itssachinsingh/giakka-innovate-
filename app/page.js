import AnimationContainer from "@/components/ui/global/animation-container";
import Animationyx from "@/components/ui/global/animationyas";
import { CustomButton } from "@/components/ui/global/custom-button";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col py-20 justify-center  items-center gap-2">
        <Animationyx delay={0.1} direction="left">
          <CustomButton href="/">Book a Call</CustomButton>
        </Animationyx>
        <Animationyx delay={0.3} direction="right">
          <CustomButton href="/" variant="secondary">
            Explore More
          </CustomButton>
        </Animationyx>

        <p className="text-primary">This is dummy</p>
        <p className="text-secondary">This is dummy</p>
      </div>
    </main>
  );
}
