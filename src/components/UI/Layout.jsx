const Layout = ({ children }) => {
  return (
    <>
      <main className="w-full py-6 md:py-12 px-2 md:px-8 lg:px-16 bg-stone-50">
        {children}
      </main>
    </>
  )
}
export default Layout
