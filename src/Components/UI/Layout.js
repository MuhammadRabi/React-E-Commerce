const Layout = ({ children }) => {
  return (
    <>
      <main className="flex justify-center items-center w-full py-8 md:py-14 px-2 md:px-8 lg:px-16 bg-slate-100">
        {children}
      </main>
    </>
  )
}
export default Layout
