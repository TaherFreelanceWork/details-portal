import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 320,
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
}));

export default function DropdownComponent(props) {
	const classes = useStyles();
	const [ location, setLocation ] = React.useState('');

	const handleChange = (event) => {
		props.onDropdownChange(event.target.value);
		setLocation(event.target.value);
	};

	return (
		<div className="dropdown-main">
			<FormControl variant="outlined" className={classes.formControl}>
				<InputLabel id="demo-simple-select-outlined-label">{props.label}</InputLabel>
				<Select
					labelId="demo-simple-select-outlined-label"
					id="demo-simple-select-outlined"
					value={location}
					onChange={handleChange}
					label={props.label}
				>
					{props.options &&
						props.options.map((_) => {
							return <MenuItem value={_.key}>{_.locationName}</MenuItem>;
						})}
				</Select>
			</FormControl>
		</div>
	);
}
