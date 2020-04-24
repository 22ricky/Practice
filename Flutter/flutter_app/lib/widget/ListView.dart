/* ListView Widget */
// import 'package:flutter/material.dart';
// void main() => runApp(MyApp());
// class MyApp extends StatelessWidget {
//   @override
//   Widget build(BuildContext context) {
//     return MaterialApp(
//       title: 'Welcome to Fultter',
//       home: Scaffold(
//         appBar: AppBar(
//           title: Text('ListView Widget'),
//         ),
//         body: ListView(
//           children: <Widget>[
//             ListTile(
//               leading: Icon(Icons.ac_unit),
//               title: Text('ac_unit'),
//             ),
//             ListTile(
//               leading: Icon(Icons.access_alarm),
//               title: Text('access_alarm'),
//             ),
//             ListTile(
//               leading: Icon(Icons.access_alarms),
//               title: Text('access_alarms'),
//             ),
//             ListTile(
//               leading: Icon(Icons.access_time),
//               title: Text('access_time'),
//             ),
//             Image.network('http://newimg.jspang.com/TaroLogo.jpg'),
//             Image.network('http://newimg.jspang.com//next_blog.jpg'),
//             Image.network('http://newimg.jspang.com/ReactHooks01.png'),
//             Image.network('http://newimg.jspang.com/Redux_index.png'),
//           ],
//         ),
//       ),
//     );
//   }
// }

// import 'package:flutter/material.dart';
// void main() => runApp(MyApp());

// class MyApp extends StatelessWidget {
//   @override
//   Widget build(BuildContext context) {
//     return MaterialApp(
//       title: 'Welcome to Flutter',
//       home: Scaffold(
//         appBar: AppBar(
//           title: Text('ListView Widget')
//         ),
//         body: Center(
//           child: Container(
//             height: 200.0,
//             child: MyList(),
//           ),
//         ),
//       ),
//     );
//   }
// }

// class MyList extends StatelessWidget {
//   @override
//   Widget build(BuildContext context) {
//     return ListView(
//       scrollDirection: Axis.horizontal,
//       children: <Widget>[
//         Container(
//           width: 200.0,
//           color: Colors.lightBlue,
//         ),
//         Container(
//           width: 200.0,
//           color: Colors.amber,
//         ),
//         Container(
//           width: 200.0,
//           color: Colors.deepOrange,
//         ),
//         Container(
//           width: 200.0,
//           color: Colors.deepPurple,
//         ),
//       ],
//     );
//   }
// }

import 'package:flutter/material.dart';
void main() => runApp(MyApp(
  items: List<String>.generate(1000, (i) => 'Item $i')
));

class MyApp extends StatelessWidget {
  final List<String> items;
  MyApp({Key key, @required this.items}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Welcome to Fultter',
      home: Scaffold(
        appBar: AppBar(
          title: Text('ListView Widget'),
        ),
        body: ListView.builder(
          itemCount: items.length,
          itemBuilder: (context, index) {
            return ListTile(
              title: Text(items[index]),
            );
          },
        ),
      ),
    );
  }
}