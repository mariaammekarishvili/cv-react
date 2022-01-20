import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const AboutPage = () => {
    return(
        <div className={'page'}>
            <div className={'about-pg'}>
                <div className={'person'}>
                    <img src={'https://scontent.ftbs6-2.fna.fbcdn.net/v/t39.30808-6/271586239_2109270512561970_2781922283944866455_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=174925&_nc_ohc=Y91Q376q3wsAX_BR7rI&_nc_ht=scontent.ftbs6-2.fna&oh=00_AT8v0MM9LQ8YeFY_bHWAuq0fkbRkxBYtH7NW2wP-DELjOQ&oe=61EF03F6'}/>
                    <div className={'info'}>
                        <h3 className={'name'}>მარიამ მეკარიშვილი</h3>
                        <span className={'gr'}>ასაკი:</span>
                        <span className={'bl'}>20</span>
                        <br/>
                        <span className={'gr'}>მისამართი:</span>
                        <span className={'bl'}>ქ.რუსთავი</span>
                        <br/>
                        <span className={'gr'}>ელ-ფოსტა:</span>
                        <span className={'bl'}>mariam.mekarishvili@gmail.com</span>
                        <br/>
                        <span className={'gr'}>ტელ. ნომერი:</span>
                        <span className={'bl'}>593 416 316</span>
                        <br/>
                    </div>
                </div>

                <div className={'contact'}>
                    <a href="https://www.linkedin.com/in/mariam-mekarishvili">Linkedin</a>
                    <a href="https://github.com/mariaammekarishvili">GitHub</a>
                    <a href={'https://www.facebook.com/Mariam.Mekarishvili'}>Facebook</a>
                    <a href="https://www.instagram.com/mariam.mekarishvili">Instagram</a>
                </div>

                <h2 className={'title'}>განათლება</h2>
                <div className={'education'}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image = 'https://saras.gov.ge/ka/News/GetNewsImage/1258'
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                ბიზნესის და ტექნოლოგიების უნივერსიტეტი
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                საინფორმაციო ტექნოლოგიები.
                                2019წ - მიმდინარე
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small"  href={'https://btu.edu.ge/'}>Learn More</Button>
                        </CardActions>
                    </Card>

                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxhNtiT4fnMtn-QxijQlzte9BYDnwFDAlRkP84IEqNT2tFxb2l3RvK-8Aze97iZiWVZ6Q&usqp=CAU'
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                New Horizons Computer Learning Centers
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                PHP (Hypertext Preprocessor)
                                01/12/2020 - 02/02/2021
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small"  href={'https://www.newhorizons.com/home'}>Learn More</Button>
                        </CardActions>
                    </Card>

                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image = 'https://developers.institute/wp-content/uploads/2019/03/LOGO-DI.png'
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Developers.Institute
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Front End Web Development
                                01/06/2020 - 02/08/2020
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small"  href={'https://developers.institute/en/'}>Learn More</Button>
                        </CardActions>
                    </Card>

                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image = 'data:image/jpeg;base64,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'
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Webiz Academy
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Full Stack Web Development
                                01/01/2021 - 12/07/2021
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small"  href={'https://webiz.ge/academy/'}>Learn More</Button>
                        </CardActions>
                    </Card>
                </div>

                <h2 className={'title'}>სამუშაო გამოცდილება</h2>

                <div className={'education'}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="140"
                            alt="green iguana"
                            image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1HebkQl6QQ3ifAi5AZhu7pw8WIHTNOI1nPQ&usqp=CAU'}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Webiz
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                 Web Developer // Yoco
                                 01/06/2021
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small"  href={'https://webiz.ge/academy/'}>Learn More</Button>
                        </CardActions>
                    </Card>

                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="140"
                            alt="green iguana"
                            image={'https://images.assetsdelivery.com/compings_v2/captainvector/captainvector1602/captainvector160276858.jpg'}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                iSchool
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Front-End dev
                               // მიმდინარე
                            </Typography>
                        </CardContent>
                    </Card>

                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="140"
                            alt="green iguana"
                            image={'https://images.assetsdelivery.com/compings_v2/captainvector/captainvector1602/captainvector160276858.jpg'}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Med24
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Front-End dev
                                // მიმდინარე
                            </Typography>
                        </CardContent>
                    </Card>
                </div>


            </div>

        </div>
    )
}

export default AboutPage