import HeaderComponent from "./components/header";
import Content from "./components/content";
import FooterComponent from "./components/footer";

function App() {
    return (
        <main className="container">
            <HeaderComponent />

            <Content />

            <FooterComponent />
        </main>
    );
}

export default App;
