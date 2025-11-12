import TextReveal from "./components/TextReveal";
import OrbitLoader from "./components/OrbitLoader";
import ButtonReveal from "./components/ButtonReveal";

function App() {

  return (
    <div className='flex flex-col h-screen items-center p-20 gap-12'>
      <div className="flex flex-col items-center gap-2.5">
        <div className="flex flex-row items-center">
          <h1 className='text-3xl font-medium'>animations.dev</h1>
          <div className="blink"></div>
        </div>
        <span className="text-base text-gray-500">
          Exercises from <a href="https://animations.dev" target="_blank" className="text-blue-500">Animations on the Web</a> course by @emilkowalski_
        </span>
      </div>

      <div className="flex max-w-xl w-full mx-auto flex-col gap-12">
        <div className="flex flex-row items-center w-full gap-10 justify-between">
          <div className="rounded-full bg-blue-500 py-2 px-4 w-fit">
            <h3 className="text-xl font-medium text-white">Text Reveal</h3>
          </div>
          <TextReveal />
        </div>

        <div className="flex flex-row items-center w-full gap-10 justify-between">
          <div className="rounded-full bg-blue-500 py-2 px-4 w-fit">
            <h3 className="text-xl font-medium text-white">Orbit Loader</h3>
          </div>
          <OrbitLoader />
        </div>

        <div className="flex flex-row items-center w-full gap-10 justify-between">
          <div className="rounded-full bg-blue-500 py-2 px-4 w-fit">
            <h3 className="text-xl font-medium text-white">Reveal with clip path</h3>
          </div>
          <div>
            <ButtonReveal />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
