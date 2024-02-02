import MaxWidthWrapper from "./MaxWidthWrapper"


const Footer = ({}) => {
return (
   <footer className="flex flex-col h-32 border-t border-gray-200 justify-center">
    <MaxWidthWrapper className="flex justify-center">
    <p className="mb-3 text-muted-foreground">Bluepoint Solutions 2023™</p>
    </MaxWidthWrapper>
   </footer>
)
}


export default Footer