export default function BurgerButton({ open, setOpen, size }){
    return(
        <div onClick={() => setOpen(!open)} className="burger-2">
            <div className="hamburger">
                <div className="burger burger1" />
                <div className="burger burger2" />
                <div className="burger burger3" />
            </div>

            <style jsx>{`
                .hamburger{
                    margin-left: 10%;
                    width: ${size}rem;
                    height: ${size}rem;
                    display: flex;
                    justify-content: space-around;
                    flex-flow: column nowrap;
                    z-index: 10;
                }
                .burger{
                    width: ${size}rem;
                    height: 0.125${size}rem;
                    border-radius: 10px;
                    background-color: white;
                    transform-origin: 1px;
                    transition: all 0.3s linear;
                }
                .burger1{
                    transform: ${ open ? 'rotate(45deg)' : 'rotate(0)'};
                }
                .burger2{
                    transform: ${ open ? 'translateX(100%)' : 'translateX(0)'};
                    opacity: ${ open ? 0 : 1};
                }
                .burger3{
                    transform: ${ open ? 'rotate(-45deg)' : 'rotate(0)'};
                }
                
            `}</style>
        </div>
    )
}