'use client'
import SearchInput from './Navbar/SearchInput'
import ButtonUi from './Navbar/ButtonUi'
import { Bell, MessageCircleMore, Store } from 'lucide-react'
import ProfileButton from './Navbar/ProfileButton'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

const Navbar = () => {

    const [user, setUser] = useState<any>(null)
      const pathname = usePathname()
    
      useEffect(() => {
        const fetchUser = async () => {
          const token = localStorage.getItem("token");
    
          const res = await fetch("/api/auth/me", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
    
          const data = await res.json();
    
          if (res.ok) {
            setUser(data);
          }
        };
    
        fetchUser();
      }, []);

  return (
      <nav className='h-20  w-full grid place-items-center px-4'>
          {/* DESKTOP VIEW */}
          <div className='w-full h-full items-center justify-between hidden lg:flex'>
              <SearchInput />
              <div className='flex items-center gap-5'>
                  <div className='flex items-center gap-3'>
                    <ButtonUi icon={Bell} />
                    <ButtonUi icon={MessageCircleMore} />
                    <ButtonUi icon={Store} />
                  </div>
                  <div className=''>
                      <ProfileButton name={user?.name} />
                  </div>
              </div>
          </div>
    </nav>
  )
}

export default Navbar