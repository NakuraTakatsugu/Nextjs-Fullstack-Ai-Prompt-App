import '@styles/globals.css';
import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata = {
  title: "Proptopia",
  RTCSessionDescription: "Find Your Prompts"
}

const RootLayout = ({ children }) => (
  <html lang="en">
    <body>
      <Provider>
      <div className="main">
        <div className="gradient"></div>
      </div>
      <main className="app">
        <Nav></Nav>
        {children}
        </main>
        </Provider>
    </body>
  </html>
);

export default RootLayout;
