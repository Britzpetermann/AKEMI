class GLHitareaPicker
{
	var stageMousePosition : Vec2;
	var result : GLInteractiveObject;

	public function new()
	{
	}

	public function pick (stage : GLStage, mousePosition : Vec2) : GLInteractiveObject
	{
		stageMousePosition = mousePosition.clone();
		stageMousePosition.multiply(stage.stageWidth, stage.stageHeight);

		result = null;
		pickRecursive(stage, new Matrix4());
		return result;
	}

	function pickRecursive(displayObjectContainer :  GLDisplayObjectContainer, parentMatrix : Matrix4)
	{
		for (displayObject in displayObjectContainer.children)
		{
			var matrix = pickDisplayObject(displayObject, parentMatrix);

			if (Std.is(displayObject, GLInteractiveObject))
			{
				var interactiveObject = cast(displayObject, GLInteractiveObject);
				if (interactiveObject.hitarea.isUnder(matrix, stageMousePosition))
					result = interactiveObject;
			}

			if (Std.is(displayObject, GLDisplayObjectContainer))
			{
				pickRecursive(cast displayObject, matrix);
			}
		}
	}

	function pickDisplayObject(displayObject : GLDisplayObject, parentMatrix : Matrix4)
	{
		displayObject.validateTransform();

		var result = new Matrix4();
		result.multiply(parentMatrix);
		result.multiply(displayObject.matrix);

		return result;
	}
}
