import NotificationButton from "./components/NotificationButton"
import Header from "./components/Header"
import SelesCard from "./components/SalesCard"

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <SelesCard />
          </div>
        </section>
      </main>
    </>
  )
}

export default App
