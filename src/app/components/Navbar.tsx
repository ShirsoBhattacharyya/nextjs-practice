import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between">
        <Link href="/" className="text-lg font-bold">
          Task Manager
        </Link>
        <div className='h-4 w-full flex justify-around align-center'>
          <Link href="/login" className="mr-4">Login</Link>
          <Link href="/signup" className="mr-4">Sign Up</Link>
          <Link href="/profile">Profile</Link>
          <Link href="/dashboard" className="mr-4">Dashboard</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;