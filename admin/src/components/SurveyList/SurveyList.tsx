import * as React from 'react';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import {
  Avatar,
  IconButton,
  ListItemAvatar,
  ListItemSecondaryAction,
} from '@material-ui/core';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';

export const SurveyList = (data: { data: Array<any> }) => {
  const list = data.data.map((survey) => (
    <ListItemLink href={/surveys/ + survey.id} key={survey.id}>
      <ListItemAvatar>
        <Avatar>
          <FolderIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={survey.id} />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItemLink>
  ));

  function ListItemLink(props: ListItemProps<'a', { button?: true }>) {
    return <ListItem button component="a" divider {...props} />;
  }

  return (
    <List component="nav" aria-label="secondary mailbox folders">
      {list}
    </List>
  );
};
