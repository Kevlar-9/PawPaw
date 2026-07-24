import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import {Link} from 'react-router-dom'


function Footer(){
  return (
    <div className="bg-[#F0EDE9] w-[1280px] h-[417px] flex flex-col gap-[80px] px-[64px] py-[48px]">
        <div className="w-[1152px] h-[216px] flex gap-[24px]">
            <div className="w-[270px] flex flex-col gap-[24px]">
                <div>
                    <h1 className='text-[24px] text-[#9A4022] font-bold leading-8 font-quicksand'>PawPalace</h1>
                </div>
                <div>
                    <p className="leading-[24px] font-inter text-[#56423C] text-[16px]">The reliable friend for your pet's
                    journey. Quality supplies and
                    responsible adoption services
                    since 2012.
                    </p>
                </div>
                <div className="flex gap-[12px]">
                    <div className="bg-[#E5E2DD] w-[40px] h-[40px] flex items-center justify-center rounded-[9999px]">
                        <SupportAgentOutlinedIcon sx={{color: '#9A4022'}}/>
                    </div>
                    <div className="bg-[#E5E2DD] w-[40px] h-[40px] flex items-center justify-center rounded-[9999px]">
                        <CameraAltOutlinedIcon sx={{color: '#9A4022'}}/>
                    </div>
                </div>
            </div>

            <div className="w-[270px] flex flex-col gap-[24px]">
                <div className='h-[24px]'>
                   <Link to='' className='font-inter text-[16px] leading-[24px] text-[#1C1C19]'>Quick Links</Link> 
                </div>
                <div className='flex flex-col h-[132px] gap-[12px] '>
                    <Link to='' className='font-inter text-[#56423C] text-[16px] leading-[24px]'>About Us</Link>
                    <Link to='' className='font-inter text-[#56423C] text-[16px] leading-[24px]'>Contact</Link>
                    <Link to='' className='font-inter text-[#56423C] text-[16px] leading-[24px]'>Shipping Policy</Link>
                    <Link to='' className='font-inter text-[#56423C] text-[16px] leading-[24px]'>Privacy Policy</Link>
                </div>
            </div>

            <div className="w-[270px] flex flex-col gap-[24px]">
                <div className='h-[24px]'>
                   <Link to='' className='font-inter text-[16px] leading-[24px] text-[#1C1C19]'>Pet Services</Link> 
                </div>
                <div className='flex flex-col h-[132px] gap-[12px] '>
                    <Link to='' className='font-inter text-[#56423C] text-[16px] leading-[24px]'>Grooming</Link>
                    <Link to='' className='font-inter text-[#56423C] text-[16px] leading-[24px]'>Training</Link>
                    <Link to='' className='font-inter text-[#56423C] text-[16px] leading-[24px]'>Veterinary Care</Link>
                    <Link to='' className='font-inter text-[#56423C] text-[16px] leading-[24px]'>Pet Sitting</Link>
                </div>
            </div>

            <div className="w-[270px] flex flex-col gap-[24px]">
                <div className='h-[24px]'>
                   <Link to='' className='font-inter text-[16px] leading-[24px] text-[#1C1C19]'>Visit Us</Link> 
                </div>
                <div className='flex flex-col h-[56px]'>
                    <Link to='' className='font-inter text-[#56423C] text-[16px] leading-[24px]'>123 Pet Lane, Suite 100</Link>
                    <Link to='' className='font-inter text-[#56423C] text-[16px] leading-[24px]'>San Francisco, CA 94105</Link>
                </div>
                <div className='flex h-[24px] items-center gap-1'>
                    <Link to='' className='font-inter text-[#9A4022] text-[16px] leading-[24px] font-bold'>Find a Store</Link>
                    <LocationOnOutlinedIcon sx={{color: '#9A4022', fontSize: 11.67}}/>
                </div>
            </div>


        </div>
        <div className='w-[1152px] border-t-1 border-[#DCC1B9]'>
            <p className='text-[#56423C] text-[12px] leading-[16px] font-medium mt-1'>© 2024 PawPalace Pet Shop. All rights reserved.</p>
            
        </div>
    </div>
  )
}

export default Footer
