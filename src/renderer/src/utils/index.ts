

const dateFormatter = new Intl.DateTimeFormat(window.context.locale,{
	dateStyle: 'short',
	timeStyle: 'short',
	timeZone: 'UTC'
})

export const formatDateFromMs = (date: number) => dateFormatter.format(date)