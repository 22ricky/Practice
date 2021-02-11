import 'package:flutter/material.dart';
import 'index.dart';
void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Stay State',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: StayStateDemo()
    );
  }
}

class StayStateDemo extends StatefulWidget {
  _StayStateDemoState createState() => _StayStateDemoState();
}

class _StayStateDemoState extends State<StayStateDemo> with SingleTickerProviderStateMixin {
  TabController _controller;

  @override
  void initState() {
    super.initState();
    _controller = TabController(length: 3, vsync: this);
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Stay State Demo'),
        bottom: TabBar(
          controller: _controller,
          tabs: [
            Tab(icon: Icon(Icons.directions_car)),
            Tab(icon: Icon(Icons.directions_transit)),
            Tab(icon: Icon(Icons.directions_bike)),
          ],
        ),
      ),
      body: TabBarView(
        controller: _controller,
        children: <Widget>[
          Index(),
          Index(),
          Index(),
        ],
      ),
    );
  }
}