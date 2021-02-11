import 'package:flutter/material.dart';
import 'drag.dart';

class Index extends StatefulWidget {
  @override
  _IndexState createState() => _IndexState();
}

class _IndexState extends State<Index> {
  Color _color = Colors.grey;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        children: <Widget>[
          Drag(
            offset: Offset(100.0, 80.0),
            color: Colors.tealAccent,
          ),
          Drag(
            offset: Offset(200.0, 80.0),
            color: Colors.redAccent,
          ),
          Center(
            child: DragTarget(
              onAccept: (Color color) {
                _color = color;
              },
              builder: (context, candidateData, rejectedData) {
                return Container(
                  width: 200.0,
                  height: 200.0,
                  color: _color,
                );
              },
            ),
          ),
        ],
      ),
    );
  }
}