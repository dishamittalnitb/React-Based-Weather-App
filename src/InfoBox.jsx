import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import TsunamiIcon from '@mui/icons-material/Tsunami';

export default function InfoBox({ info }) { //jo bhi info hogi vo info naam ke prop se aayegi
    const IMG_URL = "https://images.unsplash.com/photo-1564213053454-7fc0a81a3ea9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    const HOT_URL = "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90JTIwcGxhY2V8ZW58MHx8MHx8fDA%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29sZCUyMHBsYWNlfGVufDB8fDB8fHww";
    const RAINY_URL = "https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmFpbnxlbnwwfHwwfHx8MA%3D%3D";
    const SEA_URL = "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxvdyUyMHNlYSUyMGxldmVsfGVufDB8fDB8fHww"

    return (
        <div className='InfoBox'>
            <div className='CardContainer'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={
                            info.humidity > 65
                                ? RAINY_URL
                                : info.sea_level < 1008
                                    ? SEA_URL
                                    : info.temp > 20
                                        ? HOT_URL
                                        : COLD_URL
                        }
                        title={info.city}
                    />
                    <CardContent className='content'>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city} {
                                info.humidity > 65
                                    ? <ThunderstormIcon />
                                    : info.sea_level < 1008
                                        ? <TsunamiIcon />
                                        : info.temp > 20
                                            ? <WbSunnyIcon />
                                            : <AcUnitIcon />
                            }
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                            <div>
                                <p className='Temprature'>{info.temp}&deg;C</p>
                                <div className="contain">
                                    <div className='basic'>
                                            <p>Humidity - {info.humidity}</p>
                                            <p>Sea-level - {info.sea_level}</p>
                                    </div>
                                </div>
                                <p className='feels'>The weather is described as {info.description} and feels like {info.feels_like}&deg;C</p>
                            </div>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>)
}