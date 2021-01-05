import React from 'react';
// import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PlayIcon from '@material-ui/icons/PlayCircleOutline';
import Fab from '@material-ui/core/Fab';
import Badge from '@material-ui/core/Badge';

import { fieldNames as fieldNamesWords } from 'app/words/form/constants';

import { count } from 'api/words';

const useStyles = makeStyles({
    root: {
        minWidth: 170,
        minHeight: 170,
        float: 'left',
    },
    title: {
        fontSize: 14,
    },
    playButton: {
        marginLeft: 40,
    },
});


const Component = (props) => {
    const classes = useStyles();
    const {
        data,
        to,
        toPlay,
        history,
    } = props;
    const [countWords, setCountWords] = React.useState(0);

    React.useEffect(() => {
        const criteria = (item) => {
            return Number(item[fieldNamesWords.FOLDER_ID]) === Number(data.id);
        };

        count({ criteria }).then((result) => {
            setCountWords(result)
        });
    }, [data.id]);

    const onClickToFolder = () => {
        history.push(to);
    };
    const onClickPlay = () => {
        history.push(toPlay);
    };

    return (
        <Badge badgeContent={countWords} color="primary">
            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        {data.name}
                    </Typography>
                    <Fab aria-label="play" size="small" className={classes.playButton}>
                        <PlayIcon color="primary" onClick={onClickPlay} />
                    </Fab>
                </CardContent>
                <CardActions>
                    <Button size="medium" color="primary" onClick={onClickToFolder}>To Folder</Button>
                </CardActions>
            </Card>
        </Badge>
    );
};

Component.propTypes = {
};

Component.defaultProps = {
};

export default Component;
