/* Row Widget */
import 'package:flutter/material.dart';
void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Welcome to Flutter',
      home: Scaffold(
        appBar: AppBar(
          title: Text('Row Widget'),
        ),
        body: Row(
          children: <Widget>[
            RaisedButton(
              onPressed: (){},
              color: Colors.redAccent,
              child: Text('Red Button'),
            ),
            Expanded(
              child: RaisedButton(
                onPressed: (){},
                color: Colors.orangeAccent,
                child: Text('Orange Button'),
              ),
            ),
            RaisedButton(
              onPressed: (){},
              color: Colors.blueAccent,
              child: Text('Blue Button'),
            ),
          ],
        ),
      ),
    );
  }
}