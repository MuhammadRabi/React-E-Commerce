const Layout = ({ children }) => {
  return (
    <>
      <main className="w-full  py-8 md:py-14 px-2 md:px-8 lg:px-16 bg-stone-50">
        {children}
      </main>
    </>
  )
}
export default Layout
