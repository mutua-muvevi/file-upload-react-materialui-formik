import _ from "lodash";

export function truncateStr(string, length) {
	const response = _.truncate( string, {
		length: length
	})
	return response;
  }