// -*- mode: js-jsx -*-
/* Chrysalis -- Kaleidoscope Command Center
 * Copyright (C) 2021  Keyboardio, Inc.
 *
 * This program is free software: you can redistribute it and/or modify it under
 * the terms of the GNU General Public License as published by the Free Software
 * Foundation, version 3.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import React from "react";

import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListIcon from "@mui/icons-material/List";

import i18n from "../../i18n";

export default function KeyboardMenuItem({ selected, onClick, className }) {
  return (
    <ListItem
      button
      selected={selected}
      onClick={onClick}
      className={className}
    >
      <ListItemIcon>
        <ListIcon />
      </ListItemIcon>
      <ListItemText primary={i18n.t("app.menu.changelog")} />
    </ListItem>
  );
}
