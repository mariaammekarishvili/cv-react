import {Link} from 'react-router-dom';

const Navbar = () => {
    return(
        <div className={'navbar'}>
            <Link  style={{ textDecoration: 'none' }} to='/'> <div className={'navbar--item'}>მთავარი</div> </Link>
           <Link  style={{ textDecoration: 'none' }} to='/about'> <div className={'navbar--item'}>ჩემს შესაებ</div> </Link>
           <Link  style={{ textDecoration: 'none' }} to='/portfolio'> <div className={'navbar--item'}>პორთფოლიო</div> </Link>
           <Link  style={{ textDecoration: 'none' }} to='/project'> <div className={'navbar--item'}>პროექტი</div> </Link>
        </div>
    )
}

export default Navbar