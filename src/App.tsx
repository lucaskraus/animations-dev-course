import TextReveal from "./components/TextReveal";

function App() {

  return (
    <div className='flex flex-col h-screen items-center p-24 gap-12'>
      <h1 className='text-3xl font-medium'>Animations Dev Course</h1>

      <div className="flex flex-col items-center w-full">
        <h3>Text Reveal</h3>
        <TextReveal />
      </div>
    </div>
  )
}

export default App
