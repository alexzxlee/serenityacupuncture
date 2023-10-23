import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link, Head } from '@inertiajs/react';
import { FaFacebook } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import './WelcomeStyle.css';
import Post from '@/Components/News';


const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Therapist', href: '#therapist' },
  { name: 'Contact', href: '#contact' },
  { name: 'News', href: '#news' },
];

const icons = [
  { name: 'mdi-facebook', link: 'https://www.facebook.com/hsiuchenlin1', icon: <FaFacebook /> },
];


export default function Welcome({ auth, laravelVersion, phpVersion, posts }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.addEventListener('scroll', checkScrollTop);

  return (
    <>
        <Head title="Welcome" />
        <div className="bg-white">
        <header className="absolute inset-x-0 top-0 z-50">
            <nav className="fixed top-0 left-0 w-full flex items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div className="flex lg:flex-1">
                <a href="#" className="-m-1.5">
                <span className="sr-only">Serenity Acupuncture</span>
                <img
                    className="h-12 w-auto"
                    src="jing7.png"
                    alt=""
                />
                </a>
            </div>
            <div className="flex lg:hidden">
                <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
                >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
                {navigation.map((item) => (
                <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                    {item.name}
                </a>
                ))}
            </div>

            {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Log in <span aria-hidden="true">&rarr;</span>
                </a>
            </div> */}
            <div className="hidden lg:ml-8 lg:flex lg:items-center lg:border-l lg:border-slate-900/15 lg:pl-8">
                {auth.user ? (
                    <Link
                        href={route('dashboard')}
                        className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                    >
                        Dashboard
                    </Link>
                ) : (
                    <>
                    <Link
                        href={route('login')}
                        className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                    >
                        Log in
                    </Link>
                    <Link
                        href={route('register')}
                        className="ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                    >
                        Register
                    </Link>
                    </>
                )}

                {/* <a class="inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 bg-slate-900 text-white hover:bg-slate-700 -my-2.5 ml-8" href="/booking">
                    <span>Booking <span aria-hidden="true">→</span>
                    </span>
                </a> */}
            </div>

            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <div className="fixed inset-0 z-50" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                    <span className="sr-only">Serenity Acupuncture</span>
                    <img
                    className="h-8 w-auto"
                    src="jing7.png"
                    alt=""
                    />
                </a>
                <button
                    type="button"
                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
                </div>
                <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                        <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        onClick={() => setMobileMenuOpen(false)}
                        >
                        {item.name}
                        </a>
                    ))}
                    </div>
                    <div className="py-6">

                        {auth.user ? (
                                <>
                                <a
                                    href={route('dashboard')}
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Dashboard
                                </a>
                                </>
                            ):(
                                <>
                                <a
                                    href={route('login')}
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Log in
                                </a>
                                <a
                                    href={route('register')}
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Register
                                </a>
                                </>
                            )
                        }
                    </div>
                </div>
                </div>
            </Dialog.Panel>
            </Dialog>
        </header>

        <div className="relative isolate px-6 pt-14 lg:px-8">
            {/* <div className="image-container">
                <img src="/img/image16.jpg" alt="Your Image" className="image">
                </img>
            </div> */}

            {/* <div class="mt-4 overflow-hidden rounded-lg bg-white ring-1 ring-slate-900/5">
                <img class="hidden h-auto w-full sm:block" loading="lazy" src="/img/image16.jpg" cover/>
            </div> */}

            <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
            >
            <div
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                style={{
                clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
            />
            </div>

            <div className="mx-auto max-w-2xl py-4 sm:py-6 lg:py-7">
                <div className="sm:mb-2 sm:flex sm:justify-center center-button">
                    <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 booking-overlay button-container">
                        <span className="responsive-text-sm">
                            You can book without registering. {' '}
                        </span>
                        <a href={route('login')} className="font-semibold text-indigo-600 responsive-link">
                            <span className="absolute inset-0" aria-hidden="true" />
                            Log in to view your booking history <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>
                </div>
            </div>
            
            {/* <div className="hidden sm:mb-2 sm:flex sm:justify-center"> */}
            <div className="relative mx-auto w-full max-w-container px-4 sm:px-6 lg:px-8">
                <div className="image-container">
                    <img src="/img/image16.jpg" alt="meditation"/>
                    <div className="text-center text-overlay">
                        <div className="mx-auto max-w-2xl">
                            <h1 className="responsive-text-lg font-thin tracking-tight text-black sm:text-lg">
                            Welcome to </h1>
                            <div className="responsive-py-2" />
                            <h1 className="font-thin font-weight tracking-tight text-white sm:text-6xl responsive-text-4xl">
                            Serenity Acupuncture
                            </h1>
                            
                            <div className="responsive-mt-16 flex items-center justify-center gap-x-6">
                                <img src="/img/jing8.png" className="responsive-image" />
                            </div>
                            
                            <div className="responsive-mt-16 flex items-center justify-center gap-x-6">
                            <a
                                href="#"
                                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                onClick={(e) => {e.preventDefault(); setBookingOpen(true)}} // Open booking pop-up on click
                            >
                                Booking <span aria-hidden="true">→</span>
                            </a>
                            {/* <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                                Learn more <span aria-hidden="true">→</span>
                            </a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Booking pop-up */}
            <Dialog as="div" open={bookingOpen} onClose={() => setBookingOpen(false)}>
                <div className="fixed inset-0 flex items-center justify-center z-50">
                <Dialog.Overlay className="fixed inset-0 bg-black opacity-40" />

                <div className="relative bg-white rounded-md max-w-md mx-auto p-6 text-center">
                    <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                    Appointments
                    </Dialog.Title>

                    <p className="mt-2 text-sm text-gray-500">
                    Please<a href="tel:+1.250.871.8899" style={{ textDecoration: 'none', color: 'green' }}><span className="mdi mdi-phone text-green-500 mr-2" />Call +1 (250) 871 - 8899</a> or<a href="sms:+1.250.871.8899" style={{ textDecoration: 'none', color: 'blue'}}><span className="mdi mdi-phone text-green-500 mr-2" />Click here to send a text message</a> to schedule an appointment. The online booking system is currently under construction and will be available soon. We apologize for the inconvenience.
                    </p>

                    <button
                    className="mt-4 bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-md"
                    onClick={() => setBookingOpen(false)} // Close booking pop-up on button click
                    >
                    Close
                    </button>
                </div>
                </div>
            </Dialog>

            <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
            >
            <div
                className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                style={{
                clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
            />
            </div>
            </div>

            {/* About Section */}
            <section id="about" className="py-12">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                    <div className="max-w-3xl mx-auto">
                    <h4 className="text-2xl font-extrabold text-gray-900 text-center">What We Stand For</h4>
                    <div className="py-10" />

                    <div className="grid grid-cols-1 gap-24-switch sm:grid-cols-2">
                        <div>
                        <img className="h-64 w-full object-cover rounded-lg" src="/img/image8.jpg" alt="" />
                        </div>
                        <div>
                        <h5 className="text-lg leading-6 font-medium text-gray-900">Our Vision</h5>
                        <div className="py-2" />
                        <p className="text-base text-gray-500">
                            To become the preferred Acupuncture Therapy Clinic on Vancouver Island and in the surrounding areas. Our primary objective is to ensure that you feel better after each treatment and that you live a healthier, happier life as a result. Our relationship with you will be built on trust, mutual respect, and collaboration.
                        </p>
                        </div>
                    </div>

                    <div className="py-7" />

                    <hr className="border-gray-200" />

                    <div className="py-7" />

                    <div className="grid grid-cols-1 gap-24-switch sm:grid-cols-2">
                        <div>
                        <div className="mobile-hidden-false pb-6 mb-6">
                        <img className="h-64 w-full object-cover rounded-lg" src="/img/image7.jpg" alt="" />
                        </div>
                        <h5 className="text-lg leading-6 font-medium text-gray-900">Our Mission</h5>
                        <div className="py-2" />
                        <p className="text-base text-gray-500">
                            To provide exceptional treatments utilizing an ancient healing technique to our patients who seek pain relief and improved well-being. Healing encompasses multiple factors, and the term "healer" has gained significant popularity. In reality, we all have the capacity to heal one another, as long as we hold good intentions.
                        </p>
                        </div>
                        <div className="mobile-hidden-true">
                        <img className="h-64 w-full object-cover rounded-lg" src="/img/image7.jpg" alt="" />
                        </div>
                    </div>
                    
                    <div className="py-7" />

                    <hr className="border-gray-200" />

                    <div className="py-7" />

                    <div className="grid grid-cols-1 gap-24-switch sm:grid-cols-2">
                        <div>
                        <img className="h-64 w-full object-cover rounded-lg" src="/img/image13.jpg" alt="" />
                        </div>
                        <div>
                        <h5 className="text-lg leading-6 font-medium text-gray-900">Our Values</h5>
                        <div className="py-2" />
                        <p className="text-base text-gray-500">
                            Canada is a multicultural society that allows us to embrace and appreciate the values of others, as well as our own differences. This diversity strengthens us as a united and progressive society. Therefore, we actively acknowledge and respect professional and individual diversity at both the organizational and patient levels.
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
            </section>

            {/* Therapist Section */}
            <section id="therapist">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                    <div className="max-w-3xl mx-auto">
                        <h4 className="text-2xl font-extrabold text-gray-900 text-center">Our Therapist</h4>
                    <div className="py-10" />
                    <div className="grid grid-cols-1 gap-24-switch sm:grid-cols-2">
                        <div>
                            <img className="h-64 w-full object-cover rounded-lg" src="/img/sa03.jpg" alt="" />
                        </div>
                        <div>
                            <h5 className="text-lg leading-6 font-medium text-gray-900">Hsiu-chen Lin</h5>
                        <div className="py-2" />
                        <p className="text-base text-gray-500">
                            Hsiu-chen is a highly experienced therapist, holding certifications as a Registered Acupuncturist (R.Ac) and a Registered Traditional Chinese Medicine Practitioner (R.TCMP). With over fifteen years of expertise, Hsiu-chen has successfully aided patients in the British Columbia area, enabling them to improve their well-being and live more fulfilling lives. Her profound knowledge and skills were acquired through her graduation from the Canadian College of Oriental Medicine and Acupuncture.
                        </p>
                        </div>
                    </div>

                    <div className="py-7" />

                    <hr className="border-gray-200" />

                    <div className="py-7" />

                    <div className="grid grid-cols-1 gap-24-switch sm:grid-cols-2">
                        <div>
                        <div className="mobile-hidden-false pb-6 mb-6">
                        <img className="h-64 w-full object-cover rounded-lg" src="/img/image6.jpg" alt="" />
                        </div>
                        <h5 className="text-lg leading-6 font-medium text-gray-900">Treatment and Healing</h5>
                        <div className="py-2" />
                        <p className="text-base text-gray-500">
                            Serenity Acupuncture specializes in providing traditional treatments that address a wide range of concerns. Our treatment approach is designed to effectively manage various issues, including:
                        </p>
                        <br />
                        <ul className="text-base text-gray-500">
                            <li>- Enhancing the immune system.</li>
                            <li>- Alleviating digestive concerns.</li>
                            <li>- Improving sleep quality.</li>
                            <li>- Easing muscle aches and migraines.</li>
                            <li>- Managing both chronic and acute pain.</li>
                            <li>- Reducing stress, anxiety, and depression.</li>
                            <li>- Addressing insomnia and low energy levels.</li>
                        </ul>
                        </div>
                        <div>
                        <img className="mobile-hidden-true h-64 w-full object-cover rounded-lg" src="/img/image6.jpg" alt="" />
                        </div>
                    </div>

                    <div className="py-7" />

                    <hr className="border-gray-200" />

                    <div className="py-7" />

                    <div className="grid grid-cols-1 gap-24-switch sm:grid-cols-2">
                        <div>
                        <img className="h-64 w-full object-cover rounded-lg" src="/img/image4.jpg" alt="" />
                        </div>
                        <div>
                        <h5 className="text-lg leading-6 font-medium text-gray-900">Clinical Practice</h5>
                        <div className="py-2" />
                        <p className="text-base text-gray-500">
                            Acupuncture is a renowned form of alternative medicine and an integral part of traditional Chinese medicine (TCM). It involves the careful insertion of thin needles into specific points on the body, with the aim of providing pain relief and promoting overall well-being.
                            <br /><br />
                            Central to the practice of acupuncture is the belief in the existence of life force energy, known as Qi, and the interconnected pathways called meridians. According to this philosophy, when Qi flows smoothly through the meridians, the body is in a state of balance and good health.
                            <br /><br />
                            By stimulating specific acupuncture points, practitioners seek to restore the harmonious flow of Qi and restore balance within the body's systems. Acupuncture is often used to address a wide range of health conditions and is known for its effectiveness in providing pain relief and promoting overall wellness.
                        </p>
                        <br />
                        </div>
                    </div>

                    <div className="py-7" />

                    <hr className="border-gray-200" />

                    <div className="py-7" />

                    <div className="grid grid-cols-1 gap-24-switch sm:grid-cols-2">
                        <div>
                        <div className="mobile-hidden-false pb-6 mb-6">
                        <img className="h-64 w-full object-cover rounded-lg" src="/img/sa02.jpg" alt="" />
                        </div>
                        <h5 className="text-lg leading-6 font-medium text-gray-900">Efficacy and Safety</h5>
                        <div className="py-2" />
                        <p className="text-base text-gray-500">
                            At Serenity Acupuncture, we provide acupuncture services that promote physical comfort, strength, and flexibility in your overall well-being while creating a relaxing atmosphere to foster emotional calm. our dedicated therapist is devoted to meeting your individual needs and providing you with exceptional acupuncture services.
                        </p>
                        </div>
                        <div>
                        <img className="mobile-hidden-true h-64 w-full object-cover rounded-lg" src="/img/sa02.jpg" alt="" />
                        </div>
                    </div>

                    <div className="py-7" />

                    <hr className="border-gray-200" />

                    <div className="py-7" />

                    <div className="grid grid-cols-1 gap-24-switch sm:grid-cols-2">
                        <div>
                        <img className="h-64 w-full object-cover rounded-lg" src="/img/image5.jpg" alt="" />
                        </div>
                        <div>
                        <h5 className="text-lg leading-6 font-medium text-gray-900">Light and Hope</h5>
                        <div className="py-2" />
                        <p className="text-base text-gray-500">
                            In addition, acupuncture is frequently combined with complementary treatments like herbal medicine, dietary therapy, and lifestyle adjustments. This integrated approach amplifies the effectiveness of the treatment plan and nurtures the comprehensive well-being of individuals.
                        </p>
                        </div>
                    </div>

                    <div className="py-7" />

                    <hr className="border-gray-200" />

                    <div className="py-7" />

                    <div className="grid grid-cols-1 gap-24-switch sm:grid-cols-2">
                        <div>
                        <div className="mobile-hidden-false pb-6 mb-6">
                        <img className="h-64 w-full object-cover rounded-lg" src="/img/image11.jpg" alt="" />
                        </div>
                        <h5 className="text-lg leading-6 font-medium text-gray-900">Trust, Respect, and Happiness</h5>
                        <div className="py-2" />
                        <p className="text-base text-gray-500">
                            By utilizing specific acupuncture points, we aim to restore harmony within your body's energy systems, alleviating stress, anxiety, and emotional imbalances. Our goal is to help you achieve serenity and well-being through the ancient practice of acupuncture.
                        </p>
                        </div>
                        <div>
                        <img className="mobile-hidden-true h-64 w-full object-cover rounded-lg" src="/img/image11.jpg" alt="" />
                        </div>
                    </div>

                    <div className="py-7" />

                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-12">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <h4 className="text-2xl font-extrabold text-gray-900 text-center">Contact Us</h4>
                    </div>
                    <div className="py-10" />
                    <div className="grid grid-cols-3 sm:grid-cols-3 gap-14">
                        <div>
                            <div className="mb-4">
                            <p className="text-h7 text-center">Kind</p>
                            <br />
                            <img className="h-96 sm:h-144 w-full object-cover rounded-lg" src="/img/image12.jpg" alt="" />
                            </div>
                        </div>
                        <div>
                            <div className="mb-4">
                            <p className="text-h7 text-center">Patient</p>
                            <br />
                            <img className="h-96 sm:h-144 w-full object-cover rounded-lg" src="/img/sa05.jpg" alt="" />
                            </div>
                        </div>
                        <div>
                            <div className="mb-4">
                            <p className="text-h7 text-center">Love</p>
                            <br />
                            <img className="h-96 sm:h-144 w-full object-cover rounded-lg" src="/img/image3.jpg" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="py-7" />

                    <div className="flex flex-wrap justify-between">

                        <div className="w-full sm:w-auto justify-center">
                            <div className="text-h6 bold">
                            Clinic Availability
                            </div>

                            <div className="py-1" />

                            <div>
                                <table className="w-full">
                                    <tbody>
                                    <tr>
                                    <td className="pr-4">
                                        <div className="flex items-center">
                                        <span className="mdi mdi-calendar text-blue-500 mr-2" />
                                        Monday to Thursday
                                        </div>
                                    </td>
                                    <td>
                                        <span style={{ color: '#2196F3', filter: 'brightness(85%)' }}>8:30 am - 7:00 pm</span>
                                    </td>
                                    <td></td>
                                    </tr>
                                    <tr>
                                    <td className="pr-4">
                                        <div className="flex items-center">
                                        <span className="mdi mdi-calendar text-blue-500 mr-2" />
                                        Friday
                                        </div>
                                    </td>
                                    <td>
                                        <span style={{ color: '#2196F3', filter: 'brightness(85%)' }}>8:30 am - 5:30 pm</span>
                                    </td>
                                    <td></td>
                                    </tr>
                                    <tr>
                                    <td className="pr-4">
                                        <div className="flex items-center">
                                        <span className="mdi mdi-calendar text-blue-500 mr-2" />
                                        Saturday
                                        </div>
                                    </td>
                                    <td>
                                        <span style={{ color: '#2196F3', filter: 'brightness(85%)' }}>9:00 am - 5:00 pm</span>
                                    </td>
                                    <td></td>
                                    </tr>
                                    <tr>
                                    <td className="pr-4">
                                        <div className="flex items-center">
                                        <span className="mdi mdi-calendar text-red-500 mr-2" />
                                        <span style={{ color: 'rgba(217,48,37,1.00)' }}>Sunday</span>
                                        </div>
                                    </td>
                                    <td>
                                        <span style={{ fontWeight: 400, color: 'rgba(217,48,37,1.00)' }}>Closed</span>
                                    </td>
                                    <td></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="py-14" />

                            <div className="text-h6 bold">
                                Phone
                            </div>
                            <ul>
                            <li>
                                <a href="#" onClick={(e) => {e.preventDefault(); setBookingOpen(true)}} style={{ textDecoration: 'none', color: 'darkgreen' }}>
                                <span className="mdi mdi-phone text-green-500 mr-2" />+1 (250) 871 - 8899
                                </a>
                            </li>
                            </ul>

                            <div className="py-14" />

                            <div className="flex lg:items-center lg:gap-x-10">
                                {icons.map((item) => (
                                    <a
                                    key={item.name}
                                    href={item.link}
                                    className="text-gray-900 mr-4"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >
                                    <span className="text-2xl">{item.icon}</span>
                                    </a>
                                ))}
                            </div>

                            <div className="py-14" />
                        </div>

                        <div className="w-full sm:w-auto justify-center">
                            <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2581.218825372587!2d-124.99849438457963!3d49.68785187937745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5488140aac521a05%3A0xb4df04e1ec24c6a8!2sSerenity%20Acupuncture(Hsiu-chen%20Lin)!5e0!3m2!1sen!2sca!4v1669714043657!5m2!1sen!2sca"
                            width="600" height="450" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>

            {/* News Section */}
            <section id="news" className="py-12">
                <div className="max-w-3xl mx-auto">
                    <h4 className="text-2xl font-extrabold text-gray-900 text-center">News</h4>
                </div>
                <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
                    {posts.map(post =>
                        <Post key={post.id} post={post} />
                    )}
                </div>
            </section>

            <footer className="flex flex-col items-center justify-center">
            <div className="bg-white flex w-100 items-center px-4">
                <p className="text-gray-500">
                &copy; {new Date().getFullYear()}, Serenity Acupuncture. All rights reserved.
                </p>
            </div>
            </footer>

            <div className="py-7" />

        </div>
            <div className="fixed bottom-4 right-4">
      {showScroll && (
        <button
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center"
          onClick={scrollToTop}
        >
          ↑
        </button>
      )}
    </div>
    </>
  )
}