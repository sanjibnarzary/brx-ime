( function ( $ ) {
	'use strict';

	$.extend( $.ime.sources, {
	
		'hi-transliteration': {
			name: 'Boro - Transliteration',
			source: 'rules/hi/hi-transliteration.js'
		},
		'hi-inscript': {
			name: 'इनस्क्रिप्ट',
			source: 'rules/hi/hi-inscript.js'
		},
		'brx-transliteration': {
			name: 'Boro - Transliteration',
			source: 'rules/brx/brx-transliteration.js'
		}
	} );

	$.extend( $.ime.languages, {
		hi: {
			autonym: 'Boro',
			inputmethods: [ 'hi-transliteration', 'hi-inscript']//, 'hi-bolnagri', 'hi-phonetic', 'hi-inscript2' ]
		},
		brx: {
			autonym: 'Boro',
			inputmethods: [ 'brx-transliteration']
		}
	} );

}( jQuery ) );
