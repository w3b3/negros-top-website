import './App.css';
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    CssBaseline,
    Grid,
    Typography
} from "@mui/material";
import {AbcOutlined, MenuBookOutlined, OpenInNew, AddComment} from "@mui/icons-material";

function App() {
    return (
        <Grid className={"App"} container={false} display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <CssBaseline/>
            <Card sx={{maxWidth: 300}} elevation={5}>
                <CardMedia
                    aria-describedby={"https://unsplash.com/photos/xmSWVeGEnJw"}
                    component="img"
                    alt="image from Unsplash https://unsplash.com/photos/xmSWVeGEnJw"
                    height="140"
                    image="/unsplash.jpg"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h1">
                        Negros Top
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Esse é um projeto de código aberto para ajudar a comunidade a se organizar e se comunicar.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Grid container={true} display={"flex"} alignItems={"center"} justifyContent={"space-around"}>
                        <AbcOutlined />
                        <MenuBookOutlined></MenuBookOutlined>
                        <OpenInNew></OpenInNew>
                        <AddComment></AddComment>
                    </Grid>
                </CardActions>
            </Card>
        </Grid>
    );
}

export default App;
