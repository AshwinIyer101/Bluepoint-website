import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import DotComputer from "@/components/dot-computer-blurb";
import DotVideo from "@/components/dot-video";


export default function Home() {
    

    return (
        <>
        <MaxWidthWrapper>
            <DotVideo />
        </MaxWidthWrapper>

        <MaxWidthWrapper>
            <DotComputer />
        </MaxWidthWrapper>
        </>
    )
}