function App() {
  const title = "welcome to my app"
  const age = 10;
  const link = "http://github.com/firyaldev"

  return (
    <div className="App">
      <h1>{title}</h1>
      <h1>{age * 2}</h1>
      <a href={link}>Go to github firyal </a>
    </div>
  )
}

export default App
