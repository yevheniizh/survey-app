import * as React from 'react';
import { useState } from 'react';

import {
  Button,
  IconButton,
  ListItem,
  ListItemText,
  Box,
  Input,
} from '@material-ui/core';
import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutlined';
import HighlightOffRoundedIcon from '@material-ui/icons/HighlightOffRounded';

interface TitleItemProps {
  title: string;
  titleIndex: number;
  onEditSubmit: Function; // TEMP: helper mock function
}

const TitleItem = ({
  title,
  titleIndex,
  onEditSubmit, // TEMP: helper mock function
}: TitleItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  const onSubmit = (event: any) => {
    event.preventDefault();
    setIsEditing(false);
    onEditSubmit(newTitle, titleIndex); // TEMP: helper mock function
  };

  const onChange = (event: any) => {
    setNewTitle(event.target.value);
  };

  return (
    <ListItem divider>
      {isEditing ? (
        <ListItemText>
          <form
            onSubmit={onSubmit}
            autoComplete="off"
            style={{
              display: 'inline-flex',
              width: '100%',
              alignItems: 'center',
            }}
          >
            <Box
              style={{
                marginRight: 5,
              }}
            >{`${titleIndex + 1} - `}</Box>
            <ListItemText>
              <Input
                required
                fullWidth
                multiline
                rowsMax={5}
                id="title"
                name="title"
                value={newTitle}
                onChange={onChange}
              />
            </ListItemText>
            <Box
              style={{
                display: 'inline-flex',
                width: 64,
                justifyContent: 'space-between',
                marginLeft: 10,
              }}
            >
              <IconButton
                component="button"
                type="submit"
                edge="start"
                size="small"
              >
                <CheckCircleOutlinedIcon color="action" />
              </IconButton>
              <IconButton
                component="button"
                type="button"
                edge="start"
                size="small"
                onClick={() => {
                  setIsEditing(false);
                }}
              >
                <HighlightOffRoundedIcon color="error" />
              </IconButton>
            </Box>
          </form>
        </ListItemText>
      ) : (
        <>
          <ListItemText>{`${titleIndex + 1} - ${newTitle}`}</ListItemText>
          <Button
            size="small"
            variant="contained"
            color="primary"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </Button>
        </>
      )}
    </ListItem>
  );
};

export default TitleItem;
