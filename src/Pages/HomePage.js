import {Link} from 'react-router-dom';

const HomePage = () => {
    return(
        <Link to='/about'>
            <div className={'page'}>
                <div className={'poster'}>
                    <h1>მოგესალმებით !</h1>
                    <p>მე მარიამი ვარ, ჩემს შესახებ ინფორმაციის სანახავად გთხოვთ დააკლიკოთ პოსტერს ან გამოიყენოთ მენიუ</p>
                <span>ალბათ თქვენ იკითხავთ მეტი საქმე არ გქონდა ღამის 2 ზე ამას რო აწყობდიო?! მაგრამ რასვიზავთ საგანი 337₾ ღირს</span>
                <h2>წარმატებებს გისურვებთ!</h2>
                </div>
            </div>
        </Link>
    )
}

export default HomePage