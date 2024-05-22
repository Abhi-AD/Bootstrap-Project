import React, { useEffect } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Navbar, Footer, ScrollToTopButton, ScrollToTop, CTADes } from './components/index';
import { Home, Services, Join, Blog, About, Contact, VisitCard, BlogDetails, CardDesign, Portfolio } from './page/imports';
import { ApplyForm, Casestudy, CasestudyDetails, Current } from './containers/index';
import './App.css';

const App = () => {
    useEffect(() => {
        const handleScrollAnimation = () => {
            const scrollElements = document.querySelectorAll(".js-scroll");
            scrollElements.forEach((el) => {
                if (elementInView(el, 1.25)) {
                    displayScrollElement(el);
                } else if (elementOutofView(el)) {
                    hideScrollElement(el);
                }
            });
        };
        const elementInView = (el, dividend = 1) => {
            const elementTop = el.getBoundingClientRect().top;
            return elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend;
        };
        const elementOutofView = (el) => {
            const elementTop = el.getBoundingClientRect().top;
            return elementTop > (window.innerHeight || document.documentElement.clientHeight);
        };
        const displayScrollElement = (element) => {
            element.classList.add("scrolled");
        };
        const hideScrollElement = (element) => {
            element.classList.remove("scrolled");
        };
        window.addEventListener("scroll", handleScrollAnimation);
        return () => {
            window.removeEventListener("scroll", handleScrollAnimation);
        };
    }, []);

    
    return (
        <Router>
            <ScrollToTopButton />
            <ScrollToTop />
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/service/:id' element={<Services />} />
                <Route path='/join' element={<Join />} />
                <Route path='/blog' element={<Blog />} />
                <Route path='/blog/:id' element={<BlogDetails />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/case-study' element={<Casestudy />} />
                <Route path='/case-study-details/:id' element={<CasestudyDetails />} />
                <Route path='/visiting-card' element={<VisitCard />} />
                <Route path='/apply-form/:id' element={<ApplyForm />} />
                <Route path='/card' element={<CardDesign />} />
                <Route path='/job' element={<Current />} />
                <Route path='/portfolio' element={<Portfolio />} />
                <Route path='/book/:id' element={<CTADes />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
