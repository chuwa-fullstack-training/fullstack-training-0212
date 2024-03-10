function App() {
  return (
    <div className="flex flex-col h-5/6 w-4/5 m-auto">
      <div className="flex basis-1/6 border-2 border-black w-full mb-0.5 justify-center items-center">
        <p className="text-2xl font-bold">Header</p>
      </div>
      <div className="flex basis-1/12 border-2 border-black w-full my-0.5 justify-center items-center">
        <p className="text-2xl font-bold">Nav</p>
      </div>
      <div className="flex-1 flex h-0 w-full my-0.5">
        <div className="flex basis-1/4 border-2 border-black h-full mr-0.5 justify-center items-center">
          <p className="text-2xl font-bold">Aside</p>
        </div>
        <div className="flex flex-1 border-2 border-black h-full ml-0.5 justify-center items-center">
          <p className="text-2xl font-bold">Section</p>
        </div>
      </div>
      <div className="flex basis-1/6 border-2 border-black w-full mt-0.5 justify-center items-center">
        <p className="text-2xl font-bold">Footer</p>
      </div>
    </div>
  );
}

export default App;
