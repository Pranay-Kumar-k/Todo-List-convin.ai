import React from 'react'
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

export default function TodoCard() {
    return (
        <div>
            <Card>
                <Typography color="textSecondary" gutterBottom>
                Word of the Day
                </Typography>
            </Card>
        </div>
    )
}
