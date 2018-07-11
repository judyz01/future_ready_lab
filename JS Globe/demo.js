var examples = {};

examples['simple'] = function() {
  $('#sphere').earth3d({
    dragElement: $('#locations') // where do we catch the mouse drag
  });
};

examples['simple_tilted'] = function() {
  $('#sphere').earth3d({
    dragElement: $('#locations'), // where do we catch the mouse drag
    sphere: { // rotation and size of the planet
      tilt: 40,
      turn: 20,
      r: 10
    }
  });
};
examples['locations'] = function() {
  /* defining locations to display.
     Each position must have a key, an alpha and delta position (or x and y if you want to display a static location).
     Any additional key can be reached via callbacks functions.
  */
    //alpha is y, delta is x
  var locations = {
    obj1: {
      alpha: Math.PI / 3,
      delta: Math.PI/19,
      name: 'North America'
    },
    obj2: {
      alpha: 3 * Math.PI / 4,
      delta: -0.7 * Math.PI / 4,
      name: 'South America'
    },
    obj3: {
      alpha: 2.2 * Math.PI / 4,
      delta: -2.5 * Math.PI / 4,
      name: 'Africa'
    },
    obj4: {
      alpha: Math.PI / 4.1,
      delta: -2.5 * Math.PI / 4,
      name: 'Europe'
    },
    obj5: {
      alpha: 3.25 * Math.PI / 4,
      delta: 3 * Math.PI / 4,
      name: 'Austrailia'
    },
    obj6: {
      alpha: Math.PI / 3,
      delta: 4 * Math.PI / 4,
      name: 'Asia'
    },
    obj7: {
      y: 670,
      x: 400,
      name: 'Antarctica'
    }
  };
  $('#sphere').earth3d({
    locationsElement: $('#locations'),
    dragElement: $('#locations'), // where do we catch the mouse drag
    locations: locations
  });
};

examples['flights'] = function() {
  /* defining locations to display.
     Each position must have a key, an alpha and delta position (or x and y if you want to display a static location).
     Any additional key can be reached via callbacks functions.
  */
//Names for diff continents
  var locations = {
    obj1: {
      alpha: Math.PI / 3,
      delta: Math.PI/19,
      name: 'North America'
    },
    obj2: {
      alpha: 3 * Math.PI / 4,
      delta: -0.7 * Math.PI / 4,
      name: 'South America'
    },
    obj3: {
      alpha: 2.2 * Math.PI / 4,
      delta: -2.5 * Math.PI / 4,
      name: 'Africa'
    },
    obj4: {
      alpha: Math.PI / 4.1,
      delta: -2.5 * Math.PI / 4,
      name: 'Europe'
    },
    obj5: {
      alpha: 3.25 * Math.PI / 4,
      delta: 3 * Math.PI / 4,
      name: 'Austrailia'
    },
      obj6: {
      alpha: Math.PI / 3,
      delta: 4 * Math.PI / 4,
      name: 'Asia'
    }
  };
  /* defining paths to display.
     Each path must have a key, an origin and a destination. The values are the location's key.
     You can, if you want to, define flights on these paths.
     Each flight has a key, a destination (the location's key) and a position.
     The position is the progress a fleet has made on its path.
     Any additional key can be reach via callbacks functions.
   */
  var paths = {
    path: {
      origin: 'obj1',
      destination: 'North America',
    },
    path2: {
      origin: 'obj1',
      destination: 'South America',
    },
    path3: {
      origin: 'obj1',
      destination: 'Africa',
    },
    path4: {
      origin: 'obj1',
      destination: 'Europe'
    },
    path5: {
      origin: 'obj1',
      destination: 'Austrailia',
    },
    path6: {
      origin: 'obj1',
      destination: 'Asia',
    }
  }

  $('#sphere').earth3d({
    locationsElement: $('#locations'),
    dragElement: $('#locations'), // where do we catch the mouse drag
    paths: paths,
    locations: locations
  });
};      

function selectExample(example) {
  $('#sphere').earth3d('destroy');
  $('#sphere').replaceWith($('<canvas id="sphere" width="800" height="800"></canvas>')); //^^changes the tiny circles canvas, not the earth
  $('.location').remove();
  if (example == 'simple_mars') {
    $('#glow-shadows').removeClass('earth').addClass('mars');
  } else {
    $('#glow-shadows').removeClass('mars').addClass('earth');
  }
  var code = examples[example].toString();
  code = code.substring(14);
  code = code.substring(0, code.length - 2);
  var lines = code.split("\n");
  for (var i = 0; i < lines.length; i++) {
    lines[i] = lines[i].substring(2);
  }
  code = lines.join("\n");
  $('#example_code').val(code);

  examples[example]();
}


$(document).ready(function() {
  selectExample('flights');

  $('#example').change(function() {
    selectExample($(this).val());
  });
});


