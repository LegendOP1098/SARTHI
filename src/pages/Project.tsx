import Carousel from "../components/mini/Carousel"

interface ProjectPageProps {
  title: string;
  info: string;
}

export const ProjectPage: React.FC<ProjectPageProps> = ({title,info}) => {
  return (
    <div className="flex justify-center items-center h-lvh w-full flex-col overflow-y-hidden">
      <div>
        <h1 className="font-bold text-5xl text-black uppercase">{title}</h1>
      </div>
      <div className="flex w-full p-10 justify-around">
        <div className="w-1/2">
          <div className="h-80 w-5/6 flex">
            <Carousel/>
          </div>
        </div>
        <div className="w-1/2 text-xl">
          {info}
        </div>
      </div>
    </div>
  )
}