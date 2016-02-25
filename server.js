var express = require( 'express' );

var app = express();

function formatDate( date ){
  var str = date.toDateString();
  var parts = str.split( ' ' );
  str = parts[1] + ' ' + parts[2] + ', ' + parts[3];
  return str;
}

app.get( '/:dateStr', function( req, res ){
  
  var result = {
    unix: null,
    natural: null
  }
  
  var dateStr = req.params.dateStr;
  
  if( dateStr )
  {
    var unix = parseInt( dateStr );
    
    if( isNaN( unix ) ){
      var date = new Date( Date.parse( dateStr ) );
      result.natural = formatDate( date );
      result.unix = Math.floor( date.getTime()/1000 );
    }
    else{
      result.unix = unix;
      result.natural = formatDate( new Date( unix * 1000 ).toDateString() );
    }
  }
  
  res.end( JSON.stringify( result ) );
});

app.listen( process.argv[2] );