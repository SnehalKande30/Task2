import React, { useState } from 'react';
import { CssBaseline, Paper, } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Title from './Title';
import Card from './Card';
import InputContainer from '../Input/InputContainer';
import { Droppable } from 'react-beautiful-dnd';
import { PersonalVideoRounded } from '@material-ui/icons';


const useStyle = makeStyles((theme)=>({
    root: {
        width: '300px',
        backgroundColor: '#EBECF0',
        marginLeft: theme.spacing(1), 
    },
    classContainer: {
        marginTop:theme.spacing(4),
    }
}))

export default function List({list}){
    
    const classes = useStyle();
    return(
        <div>
            <Paper className={classes.root}>
                <CssBaseline />
                <Title title={list.title} listId = {list.id} />
                <Droppable droppableId={list.id}>{
                    (provided) => (<div ref= {provided.innerRef} {...provided.droppableProps} 
                    className={classes.classContainer}>
                         {list.cards.map((card, index) => (
                    <Card key={card.id} card={card} index={index} />
                ))}
                    {provided.placeholder}
                    </div>
                    )
                }
               
                </Droppable>
                <InputContainer listId={list.id} type='card'/>
                
            </Paper>
        </div>
    );
}