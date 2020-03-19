/* Card Widget */
import 'package:flutter/material.dart';
void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Welcome to Flutter',
      home: Scaffold(
        appBar: AppBar(
          title: Text('Card Widget'),
        ),
        body: Center(
          child: Card(
            child: Column(
              children: <Widget>[
                ListTile(
                  title: Text(
                    '北京大学',
                    style: TextStyle(
                      fontWeight: FontWeight.w500
                    ),
                  ),
                  subtitle: Text('北京市'),
                  leading: Icon(
                    Icons.account_box,
                    color: Colors.lightBlue,
                  ),
                ),
                Divider(),
                ListTile(
                  title: Text(
                    '南京大学',
                    style: TextStyle(
                      fontWeight: FontWeight.w500
                    ),
                  ),
                  subtitle: Text('南京市'),
                  leading: Icon(
                    Icons.account_box,
                    color: Colors.lightBlue,
                  ),
                ),
                Divider(),
                ListTile(
                  title: Text(
                    '东京大学',
                    style: TextStyle(
                      fontWeight: FontWeight.w500
                    ),
                  ),
                  subtitle: Text('东京市'),
                  leading: Icon(
                    Icons.account_box,
                    color: Colors.lightBlue,
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}