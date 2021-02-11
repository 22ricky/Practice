import 'package:flutter/material.dart';

class Drag extends StatefulWidget {
  final Offset offset;
  final Color color;
  const Drag({ Key key, this.offset, this.color }): super(key: key);
  _DragState createState() => _DragState();
}

class _DragState extends State<Drag> {
  Offset offset = Offset(0.0, 0.0);

  @override
  void initState() {
    super.initState();
    offset = widget.offset;
  }

  @override
  Widget build(BuildContext context) {
    return Positioned(
      left: offset.dx,
      top: offset.dy,
      child: Draggable(
        data: widget.color,
        child: Container(
          width: 100,
          height: 100,
          color: widget.color,
        ),
        feedback: Container(
          width: 100.0,
          height: 100.0,
          color: widget.color.withOpacity(0.5),
        ),
        onDraggableCanceled: (Velocity velocity, Offset offset) {
          setState(() {
            this.offset = offset;
          });
        }
      ),
    );
  }
}