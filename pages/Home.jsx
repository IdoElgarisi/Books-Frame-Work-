const { NavLink } = ReactRouterDOM
export function Home() {
    return (
    <main className="main-layout">
        <h1>Welcome To My Online Book Store</h1>
        <button><NavLink to="/book">Go To Store</NavLink></button>
    </main>
)
}