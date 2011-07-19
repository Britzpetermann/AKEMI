class WebFonts
{
	public static function loadFonts(fonts : Array<String>, complete : Void->Void)
	{
		untyped
		{
			WebFontConfig = {
					google: { families: fonts },
					active: function() {
						complete();
					},
				};

			var wf = document.createElement('script');
			wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
				'://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
			wf.type = 'text/javascript';
			wf.async = 'true';
			var s = document.getElementsByTagName('script')[0];
			s.parentNode.insertBefore(wf, s);
		}
	}
}
