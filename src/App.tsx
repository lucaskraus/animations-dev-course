import TextReveal from "./components/TextReveal";
import OrbitLoader from "./components/OrbitLoader";

function App() {

  return (
    <div className='flex flex-col h-screen items-center p-20 gap-12'>
      <div className="flex flex-col items-center gap-2">
        <h1 className='text-3xl font-medium'>Animations Dev Course</h1>
        <p className="text-base text-gray-500">
          Exercises from Animations on the Web course by @emilkowalski_
        </p>
      </div>

      <div className="flex flex-row items-center w-full gap-10 justify-center">
        <div className="rounded-full bg-blue-500 py-2 px-4">
          <h3 className="text-2xl font-medium text-white">Text Reveal</h3>
        </div>
        <TextReveal />
      </div>

      <div className="flex flex-row items-center w-full gap-10 justify-center">
        <div className="rounded-full bg-blue-500 py-2 px-4">
          <h3 className="text-2xl font-medium text-white">Orbit Loader</h3>
        </div>
        <OrbitLoader />
      </div>
    </div>
  )
}

export default App
